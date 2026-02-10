import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../apiservice';



interface DesignationItem {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-designation',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})


export class Designation {
  formsize!: FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes: any;
  alldesignation: any;
  logService: any;
  allallcompany: any;

  isEditMode = false;
  selectedDeptId: number | null = null;

  submitted = false;
  isSuccess = false;
  isError = false;
  message = '';


  departments: DesignationItem[] = [
    { name: 'Director', isActive: true },
    { name: 'Supervisor', isActive: true },
    { name: 'Foreman', isActive: false },
    { name: 'Delivery Driver', isActive: true }
  ];

  toggleStatus(dept: any) {
    var isConfirmed = confirm("Are you sure about the transaction?");
    if (isConfirmed) {
      dept.deleted = !dept.deleted;
      const formData = new FormData();
      formData.append('id', dept.id);
      formData.append('deleted', dept.deleted);
      this.apiService.updateDesignationDeleted(formData).subscribe(
        (response: any) => {
          this.isSuccess = true;
          this.message = response.mesage || "Status updated successfully.";
          this.fetchDesignations();
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
      designationname: dept.designationname,
      id: dept.id
    });
  }


  constructor(formBuilder: FormBuilder, apiService: ApiService) {
    this.formBuilder = formBuilder;
    this.apiService = apiService;

    this.formsize = this.formBuilder.group({
      designationname: ['', Validators.required],
      id: ['']


    });


    this.apiService.getAllDesignation().subscribe(
      (response: any) => {
        this.alldesignation = response.data;
        console.log("alldesignation");
        console.log(this.alldesignation);
        console.log("alldesignation");

      })





  }


  resetForm() {
    this.formsize.reset();
    this.isEditMode = false;
    this.selectedDeptId = null;
    this.submitted = false;
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
      this.updateData();
    } else {
      this.saveData();
    }
  }


  saveData() {
    // var formData = new FormData();  

    // formData.append("sizemasterdata", JSON.stringify(this.formsize.value));

    const payload = {
      ...this.formsize.value,   // existing form fields
      countrymasterobj: {
        id: this.formsize.value.country_id                  // or this.formsize.value.companyId
      }
    };

    const formData = new FormData();
    formData.append(
      'designationmasterData',
      JSON.stringify(payload)
    );

    this.apiService.saveDesignation(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Data Added Successfully.";
          this.resetForm();
          this.fetchDesignations();
        }
        else {
          this.isError = true;
          this.message = "Failed to add designation.";
        }
      },
      (error) => {
        this.isError = true;
        this.message = "An error occurred while saving.";
      })
  }

  fetchDesignations() {
    this.apiService.getAllDesignation().subscribe(
      (response: any) => {
        this.alldesignation = response.data;
      })
  }


  updateData() {
    // var formData = new FormData();  

    // formData.append("sizemasterdata", JSON.stringify(this.formsize.value));

    const payload = {
      ...this.formsize.value,   // existing form fields
      countrymasterobj: {
        id: this.formsize.value.country_id                  // or this.formsize.value.companyId
      }
    };

    const formData = new FormData();
    formData.append(
      'designationmasterData',
      JSON.stringify(payload)
    );

    this.apiService.updateDesignation(formData).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.isSuccess = true;
          this.message = "Data Updated Successfully.";
          this.resetForm();
          this.fetchDesignations();
        }
        else {
          this.isError = true;
          this.message = "Failed to update designation.";
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



