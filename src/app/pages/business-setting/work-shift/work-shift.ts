import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  departments: WorkShiftItem[] = [
    { name: 'Morning Shift', startTime: "5:45", endTime: "6:08", isActive: true },
    { name: 'Evening Shift', startTime: "5:45", endTime: "6:08", isActive: true },
    { name: 'Afternoon Shift', startTime: "5:45", endTime: "6:08", isActive: false },
    { name: 'Night Shift', startTime: "5:45", endTime: "6:08", isActive: true }
  ];

  startPeriod: string = 'AM';
  endPeriod: string = 'AM';

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.workShiftForm = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });

    this.workShiftForm.get('startTime')?.valueChanges.subscribe(value => {
      this.updatePeriod(value, 'start');
    });

    this.workShiftForm.get('endTime')?.valueChanges.subscribe(value => {
      this.updatePeriod(value, 'end');
    });
  }

  updatePeriod(timeValue: string, type: 'start' | 'end') {
    if (timeValue) {
      const hour = Number(timeValue.split(':')[0]);
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


  toggleStatus(wst: WorkShiftItem) {
    wst.isActive = !wst.isActive;
    console.log(`${wst.name} is now ${wst.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(wst: WorkShiftItem) {
    console.log('Edit department:', wst);
  }
  onSubmit() {
    if (this.workShiftForm.invalid) {
      this.workShiftForm.markAllAsTouched();
      return;
    }
    console.log('Form Submitted', this.workShiftForm.value);
  }
}
