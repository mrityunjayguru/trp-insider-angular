
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

   company: any[] = [];  // <-- store employees here
addCompany = {
  companyName: '',
  companyType: '',
  uploadCompanyLogo: '',
  gstNumber: '',
  emailId: '',
  mobileNumber: '',
  companyPassword: '',
  confirmCompanyPassword: '',
  status: '',
  contactPersonName: '',
  contactPersonDesignation: '',
  contactPersonMobileNumber: '',
  companyRegisteredAddress: '',
  companyCountry: '',
  companyState: '',
  companyCity: '',
  companyPincode: '',
  companyIdentityDocument: '',
  companyIdNumber: '',
  companyUploadDocument: ''
};



   constructor(private apiService: ApiserviceService) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.apiService.getAllCompany().subscribe({
      next: (response) => {
        console.log("API Response:", response);
        this.company = response;   // <-- save data to array
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }

  saveEmployee(companyForm:any) {


    console.log("Sending:", this.addCompany);

    this.apiService.createCompany(this.addCompany).subscribe({
      next: (res) => {
        console.log("Employee created:", res);
        alert("Employee added successfully!");

        // reset form
        //this.addCompany = { name: '', email: '', salary: null };
      },
      error: (err) => {
        console.error("API Error:", err);
        alert("Error creating employee"+err.message);
      }
    });
  }


}

