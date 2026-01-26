import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendoruserregister',
  templateUrl: './vendoruserregister.component.html',
  styleUrls: ['./vendoruserregister.component.css']
})


export class VendoruserregisterComponent {

  formBuilder :any;
  registerForm:any;
  router:any;
  apiService:any;


  constructor(formBuilder:FormBuilder, apiService :ApiService , router : Router)
    {
      
        this.router = router;
        this.apiService = apiService;

        this.formBuilder = formBuilder;
        this.registerForm = this.formBuilder.group({
            'mobile' : ['',Validators.compose([Validators.required])],
            'firstName' : ['',Validators.compose([Validators.required])],
            'shopname' : ['',Validators.compose([Validators.required])]
          })

    }

    onSubmit()
    {
      var formData = new FormData();
      formData.append("mobile",this.registerForm.value.mobile);
      formData.append("firstname",this.registerForm.value.firstName);
      formData.append("shopname",this.registerForm.value.shopname);


      this.apiService.registerUser(formData).subscribe(
        (response : any) => {
                  
          if(response.status ==200)
          { 
            this.router.navigate(['/userdetails.component']);
          }
          else
          {
          
             alert("User not created")
          }
        })

    }
}

