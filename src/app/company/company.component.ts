/*
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

   pdfBase64: string = '';
  imagesBase64: string[] = [];
  message: string = '';

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
  companyUploadDocument: '',
  fileName:''
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


 onImagesSelected(event: any) {
    const files = event.target.files;
    this.imagesBase64 = [];

    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagesBase64.push((reader.result as string).split(',')[1]);
      };
      reader.readAsDataURL(file);
    });
  }

  saveEmployee(companyForm:any) {


    console.log("Sending:", this.addCompany);

    this.apiService.createCompany(this.addCompany).subscribe({
      next: (res) => {
        console.log("Company created:", res);
        alert("Company added successfully!");

        // reset form
        //this.addCompany = { name: '', email: '', salary: null };
      },
      error: (err) => {
        console.error("API Error:", err);
        alert("Error creating company "+err.error);
      }
    });
  }


}*/

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

  pdfBase64: string = '';
  imagesBase64: string[] = [];
  message: string = '';

  company: any[] = [];

  addCompany: any = {  
    companyName: '',
    companyType: '',
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
    
    // file fields
    companyUploadDocument: '',   // PDF base64 here
    uploadCompanyLogo: '',       // first image
    fileName: ''
  };

  constructor(private apiService: ApiserviceService) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.apiService.getAllCompany().subscribe({
      next: (response) => {
        this.company = response;
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }

  // ⬇ HANDLE PDF DOCUMENT
  onPdfSelected(event: any) {
    const file = event.target.files[0];
    this.addCompany.fileName = file.name;
    

    const reader = new FileReader();
    reader.onload = () => {
      this.pdfBase64 = (reader.result as string).split(',')[1];
      this.addCompany.companyUploadDocument = this.pdfBase64; // attach to payload
    };
    reader.readAsDataURL(file);
  }

  // ⬇ HANDLE COMPANY IMAGES
  onImagesSelected(event: any) {
    const files = event.target.files;
    this.imagesBase64 = [];

    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        this.imagesBase64.push(base64);
      };
      reader.readAsDataURL(file);
    });

    // assign first image as company logo
    setTimeout(() => {
      if (this.imagesBase64.length > 0) {
        this.addCompany.uploadCompanyLogo = this.imagesBase64[0];
      }
    }, 500);
  }

  // ⬇ SEND all company info + files
  saveEmployee(form: any) {

  if (form.invalid || this.addCompany.companyPassword !== this.addCompany.confirmCompanyPassword) {
    this.message = "Please fill all required fields correctly!";
    return;
  }

    const payload = {
      ...this.addCompany,                // all company details  
      pdfBase64: this.pdfBase64,         // document  
      companyImages: this.imagesBase64   // multiple images
    };

    console.log("Final Payload:", payload);

    this.apiService.createCompany(payload).subscribe({
      next: (res) => {
        alert("Company added successfully!");
      },
      error: (err) => {
        alert("Error creating company: " + err.error);
      }
    });
  }

}


