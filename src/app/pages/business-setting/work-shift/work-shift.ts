import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../apiservice';
import { ZardAlertDialogService } from '../../../shared/components/alert-dialog/alert-dialog.service';


interface WorkShiftItem {
  name: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

@Component({
  selector: 'app-work-shift',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './work-shift.html',
  styleUrl: './work-shift.css',
})


export class WorkShift {
  workShiftForm!: FormGroup;
  sizes: any;
  departments: any;

  isEditMode = false;
  selectedDeptId: number | null = null;
  allallcompany: any;

  submitted = false;
  isSuccess = false;
  isError = false;
  message = '';

  startPeriod: string = 'AM';
  endPeriod: string = 'AM';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private alertDialogService: ZardAlertDialogService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.fetchWorkShifts();
  }

  initForm() {
    this.workShiftForm = this.fb.group({
      id: [''],
      workshiftname: ['', Validators.required],
      workshiftstarttime: ['', Validators.required],
      workshiftendtime: ['', Validators.required]
    });

    this.workShiftForm.get('workshiftstarttime')?.valueChanges.subscribe(value => {
      this.updatePeriod(value, 'start');
    });

    this.workShiftForm.get('workshiftendtime')?.valueChanges.subscribe(value => {
      this.updatePeriod(value, 'end');
    });
  }

  updatePeriod(timeValue: string, type: 'start' | 'end') {
    if (timeValue) {
      const timeStr = String(timeValue);

      console.log(" time Str " + timeStr);

      const hour = Number(timeStr.split(':')[0]);
      const period = hour >= 12 ? 'PM' : 'AM';
      if (type === 'start') {
        this.startPeriod = period;
      } else {
        this.endPeriod = period;
      }
    }
  }

  updateStartPeriod(event: any) {
    const timeValue = event.target.value;
    this.updatePeriod(timeValue, 'start');
  }
  updateEndPeriod(event: any) {
    const timeValue = event.target.value;
    this.updatePeriod(timeValue, 'end');
  }


  onSubmit() {
    this.submitted = true;
    this.isSuccess = false;
    this.isError = false;
    this.message = '';

    if (this.workShiftForm.invalid) {
      this.workShiftForm.markAllAsTouched();

      return;
    }


    if (this.isEditMode) {
      this.updateData();
    } else {
      this.saveData();
    }
  }

  saveData() {
    const payload = {
      ...this.workShiftForm.value
    };

    const formData = new FormData();
    formData.append('save', JSON.stringify(payload));

    this.apiService.saveWorkShift(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Work shift added successfully.";

          this.resetForm();
          this.fetchWorkShifts();
        } else {
          this.isError = true;
          this.message = response.mesage || "Failed to add work shift.";
        }
      },
      (error) => {
        this.isError = true;
        this.message = "An error occurred while saving.";
      });
  }

  updateData() {
    const payload = {
      ...this.workShiftForm.value
    };

    const formData = new FormData();
    formData.append('update', JSON.stringify(payload));

    this.apiService.updateWorkShift(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Work shift updated successfully.";
          this.resetForm();
          this.fetchWorkShifts();
        } else {
          this.isError = true;
          this.message = response.mesage || "Failed to update work shift.";
        }
      },
      (error) => {
        this.isError = true;
        this.message = "An error occurred while updating.";
      });
  }

  fetchWorkShifts() {
    this.apiService.getAllWorkShift().subscribe(
      (response: any) => {
        this.departments = response.data;
      });
  }

  resetForm() {
    this.workShiftForm.reset();
    this.isEditMode = false;
    this.selectedDeptId = null;
    this.submitted = false;
    window.location.reload();
  }

  formatTime(time: string): string {
    if (!time) return '';

    const timeStr = String(time);

    console.log("timeStr at show " + timeStr);

    const [hours, minutes] = timeStr.split(',');
    let h = parseInt(hours);
    const m = minutes;
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    return `${h}:${m} ${ampm}`;
  }

  toggleStatus(wst: any) {
    const dialogRef = this.alertDialogService.confirm({
      zTitle: 'Confirm Status Change',
      zContent: 'Are you sure you want to change the status of this work shift?',
      zOkText: 'Confirm',
      zCancelText: 'Cancel',
      zOnOk: () => {
        wst.deleted = !wst.deleted;
        const formData = new FormData();
        formData.append('id', wst.id);
        formData.append('deleted', wst.deleted);
        this.apiService.updateWorkShiftDeleted(formData).subscribe(
          (response: any) => {
            this.isSuccess = true;
            this.message = response.mesage || "Status updated successfully.";
            this.fetchWorkShifts();
          },
          (error) => {
            this.isError = true;
            this.message = "An error occurred while updating status.";
          }
        );
      }
    });
  }

  editDepartment(wst: any) {

    wst.workshiftstarttime = String(wst.workshiftstarttime).replace(',', ':');
    wst.workshiftendtime = String(wst.workshiftendtime).replace(',', ':');

    this.isEditMode = true;
    this.selectedDeptId = wst.id;
    this.workShiftForm.patchValue({
      id: wst.id,
      workshiftname: wst.workshiftname,
      workshiftstarttime: wst.workshiftstarttime,
      workshiftendtime: wst.workshiftendtime
    });


  }
}
