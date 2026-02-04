/*import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})
export class Login implements OnInit, OnDestroy {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  otpVisible = false;
  otpBoxes = Array(6);
  otp: string[] = Array(6).fill('');

  timer: number = 0;
  intervalId: any;

  errorMessage: string = '';
  isValidating: boolean = false;

  constructor(private ngZone: NgZone, private toastr: ToastrService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showOtp() {
    this.otpVisible = true;
    this.startTimer();

    setTimeout(() => {
      this.focusOtpInput(0);
    }, 100);
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.timer = 60;

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.timer--;

          if (this.timer <= 0) {
            this.timer = 0;
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    });
  }

  resendOtp() {

    this.otp = Array(6).fill('');

    this.errorMessage = '';
    if (this.otpInputs) {
      this.otpInputs.forEach(input => {
        input.nativeElement.value = '';
      });
    }

    alert("OTP Resent Successfully");
    this.startTimer();
    setTimeout(() => {
      this.focusOtpInput(0);
    }, 100);
  }

  onOtpInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;
    if (this.errorMessage) {
      this.errorMessage = '';
    }
    if (value && !/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otp[index] = value;
    if (value && index < 5) {
      this.focusOtpInput(index + 1);
    }
    if (index === 5 && value) {
      this.validateOtp();
    }
  }

  onOtpKeydown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {

        this.focusOtpInput(index - 1);
      } else {

        this.otp[index] = '';
      }
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      this.focusOtpInput(index - 1);
    } else if (event.key === 'ArrowRight' && index < 5) {
      this.focusOtpInput(index + 1);
    }
  }

  focusOtpInput(index: number) {
    if (this.otpInputs && this.otpInputs.toArray()[index]) {
      this.otpInputs.toArray()[index].nativeElement.focus();
    }
  }

  getOtpValue(): string {
    return this.otp.join('');
  }

  validateOtp() {
    const otpValue = this.getOtpValue();

    if (otpValue.length === 6) {
      this.isValidating = true;
      this.errorMessage = '';

      console.log('OTP Entered:', otpValue);

      setTimeout(() => {
        this.isValidating = false;

        if (otpValue === '123456') {
          alert('OTP Verified Successfully! ✅');

        } else {

          this.errorMessage = 'Invalid OTP. Please try again.';

          this.otp = Array(6).fill('');
          if (this.otpInputs) {
            this.otpInputs.forEach(input => {
              input.nativeElement.value = '';
            });
          }

          setTimeout(() => {
            this.focusOtpInput(0);
          }, 100);
        }
      }, 1000);
    }
  }
}*/

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../apiservice';
import { AuthService } from '../../authservice';
import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 ADD THIS

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
})
export class Login implements OnInit, OnDestroy {
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone, private toastr: ToastrService    
  ) {
    
    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^-?(0|[0-9]\d*)?$/)]],
      // recaptcha: ['',[Validators.required]] 
     recaptcha: ['']
      //recaptcha: [''] // Remove the reCAPTCHA field

    });
  }

@ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
   mobile = '';
  otpVisible = false;
  otpBoxes = Array(6);
  otp: string[] = Array(6).fill('');

  timer: number = 0;
  intervalId: any;

  errorMessage: string = '';
  isValidating: boolean = false;




  ngOnDestroy() {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showOtp() {
    this.otpVisible = true;
    this.startTimer();

    setTimeout(() => {
      this.focusOtpInput(0);
    }, 100);
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.timer = 60;

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.timer--;

          if (this.timer <= 0) {
            this.timer = 0;
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    });
  }

  resendOtp() {

    this.otp = Array(6).fill('');

    this.errorMessage = '';
    if (this.otpInputs) {
      this.otpInputs.forEach(input => {
        input.nativeElement.value = '';
      });
    }

    alert("OTP Resent Successfully");
    this.startTimer();
    setTimeout(() => {
      this.focusOtpInput(0);
    }, 100);
  }

  onOtpInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;
    if (this.errorMessage) {
      this.errorMessage = '';
    }
    if (value && !/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otp[index] = value;
    if (value && index < 5) {
      this.focusOtpInput(index + 1);
    }
    if (index === 5 && value) {
      this.validateOtp();
    }
  }

  onOtpKeydown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {

        this.focusOtpInput(index - 1);
      } else {

        this.otp[index] = '';
      }
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      this.focusOtpInput(index - 1);
    } else if (event.key === 'ArrowRight' && index < 5) {
      this.focusOtpInput(index + 1);
    }
  }

  focusOtpInput(index: number) {
    if (this.otpInputs && this.otpInputs.toArray()[index]) {
      this.otpInputs.toArray()[index].nativeElement.focus();
    }
  }

  getOtpValue(): string {
    return this.otp.join('');
  }

  validateOtp() {
    const otpValue = this.getOtpValue();

  //  alert("Mobile: " + this.mobile + ", OTP: " + otpValue);

    if (otpValue.length === 6) {

      this.onSubmit(this.mobile, otpValue);

      this.isValidating = true;
      this.errorMessage = '';

      console.log('OTP Entered:', otpValue);

      setTimeout(() => {
        this.isValidating = false;

        if (otpValue === '123456') {
          alert('OTP Verified Successfully! ✅');

        } else {

          this.errorMessage = 'Invalid OTP. Please try again.';

          this.otp = Array(6).fill('');
          if (this.otpInputs) {
            this.otpInputs.forEach(input => {
              input.nativeElement.value = '';
            });
          }

          setTimeout(() => {
            this.focusOtpInput(0);
          }, 100);
        }
      }, 1000);
    }
  }


  onSubmit(mobile:any, otp:any) {

    
    

      
      var formData = new FormData();
      formData.append("mobile", mobile);
      formData.append("otp", otp);

     // this.openUniWebViewURL(this.loginForm.value.mobile, this.loginForm.value.otp);

      this.authService.login(mobile,otp);


      
    
  }
  get f() {
    return this.loginForm.controls;
  }


  
  ngOnInit(): void {
    setTimeout(() => {
      var mobile = localStorage.getItem("mobile");
      var otp = localStorage.getItem("otp");



      if (mobile != undefined && otp != undefined) {
        this.authService.login(mobile, otp);
      }

    }, 10);


  }


  openUniWebViewURL(mobile: any, otp: any) {

    console.log("openUniWebViewURL");


    // Create a link with custom scheme and message
 //   var link = 'uniwebview://ShowAlert?message=' + mobile + '&otp=' + otp;
    // Trigger the link
   // document.location.href = link;
  }




}
