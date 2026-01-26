import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})

export class AddvendorComponent {
  registerForm: any; // Declare registerForm as a FormGroup
  formBuilder:any;
  apiService:any;
  router :any;



  constructor( formBuilder: FormBuilder, apiService: ApiService, router: Router) {

    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.router=router;



    this.registerForm = this.formBuilder.group({
      'mobile': ['', Validators.required],
      'firstName': ['', Validators.required],
      'roleid': ['', Validators.required],
     
    });
  }

  onSubmit() {

    var formData = new FormData();
      formData.append("mobile",this.registerForm.value.mobile);
      formData.append("firstname",this.registerForm.value.firstName);
      formData.append("shopname","");
      formData.append("roleid",this.registerForm.value.roleid);


      this.apiService.registerUserVendor(formData).subscribe(
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


  alphanumber(event: KeyboardEvent): void {
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
