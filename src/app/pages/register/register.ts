import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { toast } from 'ngx-sonner';

import { ApiService } from '../../apiservice';

import { Router } from '@angular/router';

import {Cidservice} from "../../cidservice"

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: ApiService,
    private router: Router, private cidservice:Cidservice
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  sendOtp(): void {
    if (this.registerForm.get('mobile')?.invalid) {
      this.registerForm.get('mobile')?.markAsTouched();
      return;
    }

    const mobile = this.registerForm.value.mobile;

    /*  this.registerService.sendOtp(mobile).subscribe({
        next: () => toast.success('OTP sent successfully'),
        error: () => toast.error('Failed to send OTP')
      });*/
  }

  onSubmit(): void {

    if (this.registerForm.invalid) return;
    if (this.registerForm.value.mobile != undefined && this.registerForm.value.mobile.length != 10) {
      toast.error("Please enter a valid 10-digit mobile number");
    }
    else {

      console.log("=======================");
      console.log(this.registerForm.value);
      console.log("=======================");

              var formData = new FormData();
                formData.append("mobile",this.registerForm.value.mobile);
                formData.append("firstname","demo");
                formData.append("shopname","demo");

              

            
              this.registerService.registerUser(formData).subscribe({
                next: (res) => {
                  
                  
                  console.log("register");
                  console.log("register");
                  console.log(res);
                  console.log("register");
                  console.log("register");

                  if (res.mesage && res.mesage.includes(' User allready exists')) {
                     // redirect to login if user already exists
                     alert("User allready exists");
                            this.cidservice.clearStorage();
                           this.router.navigate(['/login']);
                    }
                    else
                    {
                          this.cidservice.setCompanyId(res.data.id);
                          //alert(this.cidservice.getCompanyId());

                          this.router.navigate(['company/kyb']);
                    }
                },
               error: (err) => {
                   this.cidservice.clearStorage();
                }
              });

    }
  }
}
