import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service';

@Component({
  selector: 'app-addvendormerchant',
  templateUrl: './addvendormerchant.component.html',
  styleUrls: ['./addvendormerchant.component.css']
})

export class AddvendormerchantComponent {
  registerForm: any; // Declare registerForm as a FormGroup
  formBuilder:any;
  apiService:any;
  router :any;
  headerFooterService: any;
  vendorid:any;
  vendordata:any;


  constructor(headerFooterService: HeaderfooterService, formBuilder: FormBuilder,   apiService: ApiService,  router: Router  ) {
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.router=router;
    

    this.vendordata =  localStorage.getItem("otheruserData");
    this.vendordata = JSON.parse(this.vendordata);

  
    if(this.vendordata == undefined || this.vendordata.id == undefined)
    {
          alert(" Session has been expired ");
          this.router.navigateByUrl('/');
          return;
    }



    this.registerForm = this.formBuilder.group({
      'mobile': ['', Validators.required],
      'firstName': ['', Validators.required],
      'roleid': ['', Validators.required],
      'vendorid': [this.vendordata.id,Validators.required],
     
    });
  }

  onSubmit() {


    if(this.registerForm.value.vendorid ==  undefined )
    {
      alert(" Seesion has been expired ");
      this.router.navigateByUrl('/');
      return;
    }
   

    var formData = new FormData();
      formData.append("mobile",this.registerForm.value.mobile);
      formData.append("firstname",this.registerForm.value.firstName);
      formData.append("shopname","");
      formData.append("roleid",this.registerForm.value.roleid);
      formData.append("vendorid",this.registerForm.value.vendorid);


      this.apiService.registerVendormerchant(formData).subscribe(
        (response : any) => {
                 
              
              if(response.status ==200)
              {
                  alert(" created");
                //this.router.navigate(['/userdetails.component']);
              }
              else
              {
            
                alert("User not created")
              }
        })
  }

  alphaNumber(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /^[0-9]*$/;

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  alpha(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /^[a-zA-Z]*$/;

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
