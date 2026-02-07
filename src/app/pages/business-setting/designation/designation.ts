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

  departments: DesignationItem[] = [
    { name: 'Director', isActive: true },
    { name: 'Supervisor', isActive: true },
    { name: 'Foreman', isActive: false },
    { name: 'Delivery Driver', isActive: true }
  ];

  toggleStatus(deg: DesignationItem) {
    deg.isActive = !deg.isActive;
    console.log(`${deg.name} is now ${deg.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(deg: DesignationItem) {
    console.log('Edit department:', deg);
    // Add your edit logic here
  }


  constructor(formBuilder: FormBuilder, apiService: ApiService) {
    this.formBuilder = formBuilder;
    this.apiService = apiService;

    this.formsize = this.formBuilder.group({
      designationname: ['', Validators.required],
    });


    this.apiService.getAllDesignation().subscribe(
      (response: any) => {
        this.alldesignation = response.data;
        console.log("alldesignation");
        console.log(this.alldesignation);
        console.log("alldesignation");

      })





  }

  onSubmit() {

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
          alert("Data Added Successfully.");
        }
        else {
          alert("Not Add");
        }
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



