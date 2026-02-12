import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { toast } from 'ngx-sonner';

import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { ApiService } from '../../../apiservice';



@Component({
  selector: 'app-working-days',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './working-days.html',
  styleUrl: './working-days.css',
})

export class WorkingDays  {

  vehicleTypes: any;
  vehicleTypesBrands: any;

  fuelTypes: any;

  

  formsize!: FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes: any;
  departments: any;

  allallcompany: any;
  allStae: any;
  allDistrict: any;

  isEditMode = false;
  selectedDeptId: number | null = null;

  map: any;
  marker: any;
  @ViewChild('searchBox') searchBox!: ElementRef;


  officeName = '';
  officeAddress = '';
  state = '';
  district = '';
  statesList = ['Tamil Nadu', 'Kerala', 'Karnataka'];
  districtsList = ['Chennai', 'Coimbatore', 'Madurai'];
  submitted = false;

  toggleStatus(dept: any) {
    var isConfirmed = confirm("Are you sure about the transaction?");
    if (isConfirmed) {
      dept.deleted = !dept.deleted;
      const formData = new FormData();
      formData.append('id', dept.id);
      formData.append('deleted', dept.deleted);
      this.apiService.updateAddVehiclesDeleted(formData).subscribe(
        (response: any) => {
          alert(response.mesage);
          window.location.reload();
        })
    }
  }


  atLeastOneCheckedValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;
      const isAnyChecked = Object.keys(group.controls).some(key => group.get(key)?.value);
      return isAnyChecked ? null : { requireOne: true };
    };
  }

  editDepartment(dept: any) {



    this.isEditMode = true;
    this.selectedDeptId = dept.id;

    this.formsize.patchValue({
       monday: dept.monday=="true" ? true : false,
      tuesday: dept.tuesday=="true" ? true : false,
      wednessday: dept.wednessday=="true" ? true : false,
      thursday: dept.thursday=="true" ? true : false,
      friday: dept.friday=="true" ? true : false,
      saturday: dept.saturday=="true" ? true : false,
      sunday: dept.sunday=="true" ? true : false,
      id:dept.id

    });



  }

  resetForm() {
    this.formsize.reset();
    this.isEditMode = false;
    this.selectedDeptId = null;
    window.location.reload();
  }

  constructor(formBuilder: FormBuilder, apiService: ApiService) {

    this.formBuilder = formBuilder;
    this.apiService = apiService;

     this.formsize = this.formBuilder.group({
      monday: [false],
      tuesday: [false],
      wednessday: [false],
      thursday: [false],
      friday: [false],
      saturday: [false],
      sunday: [false],
      id:[''],
    }, { validators: this.atLeastOneCheckedValidator() });


    this.apiService.getAllAddWorkingDays().subscribe(
      (response: any) => {

        this.departments = response.data;
        console.log("getAllAddWorkingDays");
        console.log(this.departments);
        console.log("getAllAddWorkingDays");

  });
}




  onSubmit() {
    this.submitted = true;

    

    if (this.formsize.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.updateData();
    } else {
      this.saveData();
    }
  }

  updateData() {



    const payload = {
      ...this.formsize.value,   // existing form fields
      companyobj: {
        id: this.formsize.value.company_id                  // or this.formsize.value.companyId
      }
    };

    const formData = new FormData();
    formData.append(
      'update',
      JSON.stringify(payload)
    );

    this.apiService.updateAddWorkingDays(formData).subscribe(
      (response: any) => {

        if (response.status == 200) {
          alert("Data updated Successfully.");
          this.resetForm();
        }
        else {
          alert("Not Updated");
        }
      })
  }

  saveData() {

    const payload = {
      ...this.formsize.value,   // existing form fields
      companyobj: {
        id: this.formsize.value.company_id                  // or this.formsize.value.companyId
      }
    };

    const formData = new FormData();
    formData.append(
      'save',
      JSON.stringify(payload)
    );

    this.apiService.saveAddWorkingDays(formData).subscribe(
      (response: any) => {

        if (response.status == 200) {
          alert("Data Added Successfully.");
          this.resetForm();
        }
        else {
          alert("Not Add");
        }
      })
  }


}



