import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { HeaderfooterService } from '../headerfooter.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent  implements OnInit{
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    
    private router: Router,
    private headerFooterService: HeaderfooterService
  ) {
        this.headerFooterService.disableHeader();
        this.headerFooterService.disableFooter();
        this.loginForm = this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^-?(0|[0-9]\d*)?$/)]],
        recaptcha: ['',[Validators.required]] // Add the reCAPTCHA field
      //recaptcha: [''] // Remove the reCAPTCHA field

     
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      var formData = new FormData();
      formData.append("mobile", this.loginForm.value.mobile);
      formData.append("otp", this.loginForm.value.otp);

      this.openUniWebViewURL(this.loginForm.value.mobile,this.loginForm.value.otp);

            this.authService.loginCustomer(this.loginForm.value.mobile,this.loginForm.value.otp);

    } else {
      alert("Please complete the reCAPTCHA validation.");
    }
  }
  get f() {
    return this.loginForm.controls;
  }

  openUniWebViewURL(mobile:any,otp:any) {
   
    console.log("openUniWebViewURL");


      // Create a link with custom scheme and message
      var link = 'uniwebview://ShowAlert?message='+mobile+'&otp='+otp;
      // Trigger the link
      document.location.href = link;
   }


   ngOnInit(): void {
    setTimeout(() => {
            var mobile = localStorage.getItem("mobile");
            var otp = localStorage.getItem("otp");

              if(mobile != undefined && otp != undefined)
              {
                  this.authService.login(mobile,otp);
              }
      
  }, 10);


}







}
