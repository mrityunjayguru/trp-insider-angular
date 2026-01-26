import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})

 





export class RegisteruserComponent {

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
          mobile: [
            null,
            [Validators.required, this.positiveNumberAndLength10()],
          ],
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

     positiveNumberAndLength10(): ValidatorFn {
      return (control: AbstractControl) => {
        const value = control.value;
        
        // Check if the value is a number and positive
        if (isNaN(value) || value <= 0) {
          return { positiveNumber: true };
        }
    
        // Check if the value has exactly 10 digits
        if (value.toString().length !== 10) {
          return { length10: true };
        }
    
        return null; // No error
      };
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


