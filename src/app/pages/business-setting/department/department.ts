import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../apiservice';




interface DepartmentItem {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-department',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})


export class Department {
  formsize!: FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes: any;
  departments: any;

  allallcompany: any;

  isEditMode = false;
  selectedDeptId: number | null = null;

  submitted = false;
  isSuccess = false;
  isError = false;
  message = '';



  toggleStatus(dept: any) {
    var isConfirmed = confirm("Are you sure about the transaction?");
    if (isConfirmed) {
      dept.deleted = !dept.deleted;
      const formData = new FormData();
      formData.append('id', dept.id);
      formData.append('deleted', dept.deleted);
      this.apiService.updateDepartmentDeleted(formData).subscribe(
        (response: any) => {
          this.isSuccess = true;
          this.message = response.mesage || "Status updated successfully.";
          this.showAllData();
        },
        (error) => {
          this.isError = true;
          this.message = "An error occurred while updating status.";
        })
    }
  }


  editDepartment(dept: any) {
    this.isEditMode = true;
    this.selectedDeptId = dept.id; // or dept._id based on backend

    this.formsize.patchValue({
      deptname: dept.deptname,
      id: dept.id
    });
  }


  resetForm() {
    this.formsize.reset();
    this.isEditMode = false;
    this.selectedDeptId = null;
    this.submitted = false;
  }

  constructor(formBuilder: FormBuilder, apiService: ApiService) {
    this.formBuilder = formBuilder;
    this.apiService = apiService;

    this.formsize = this.formBuilder.group({
      id: [''],
      deptname: ['', Validators.required],

      company_id: ['12'],
      company_name: ['NIIT Ltd'],
    });









    this.apiService.getAllDepartment().subscribe(
      (response: any) => {

        this.departments = response.data;
        console.log("Department");
        console.log(this.departments);
        console.log("Department");


      })


    this.apiService.getAllAllCompany().subscribe(
      (response: any) => {

        this.allallcompany = response.data.content;


      })


  }

  onSubmit() {
    this.submitted = true;
    this.isSuccess = false;
    this.isError = false;
    this.message = '';

    if (this.formsize.invalid) {
      this.formsize.markAllAsTouched();
      return;
    }

    if (this.isEditMode) {
      this.updateDepartment();
    } else {
      this.saveDepartment();
    }
  }


  showAllData() {

    this.resetForm();

    this.apiService.getAllDepartment().subscribe(
      (response: any) => {

        this.departments = response.data;
      })
  }

  saveDepartment() {


    const payload = {
      ...this.formsize.value,   // existing form fields
      companyobj: {
        id: this.formsize.value.company_id                  // or this.formsize.value.companyId
      }
    };

    const formData = new FormData();
    formData.append(
      'department',
      JSON.stringify(payload)
    );

    this.apiService.saveDepartment(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Data Added Successfully.";
          this.resetForm();
          this.showAllData();
        }
        else {
          this.isError = true;
          this.message = "Failed to add department.";
        }
      },
      (error) => {
        this.isError = true;
        this.message = "An error occurred while saving.";
      })
  }


  updateDepartment() {
    const payload = {
      ...this.formsize.value,   // existing form fields
      companyobj: {
        id: this.formsize.value.company_id
      }
    };

    const formData = new FormData();
    formData.append(
      'department',
      JSON.stringify(payload)
    );

    this.apiService.updateDepartment(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Data Updated Successfully.";
          this.resetForm();
          this.showAllData();
        }
        else {
          this.isError = true;
          this.message = "Failed to update department.";
        }
      },
      (error) => {
        this.isError = true;
        this.message = "An error occurred while updating.";
      })
  }


  onCompanyChange(event: any) {

    const value = (event.target as HTMLSelectElement).value;

    const company = this.allallcompany.find((c: { id: any; }) => c.id == value);


    this.formsize.patchValue({
      company_name: company ? company.companyName : ''
    });
  }

}
