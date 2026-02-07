import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { toast } from 'ngx-sonner';

import { RegisterFooter } from "@/shared/register-footer/register-footer";
import { ApiService } from '../../apiservice';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterFooter
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: ApiService,
    private router: Router
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
      formData.append("mobile", this.registerForm.value.mobile);
      formData.append("firstname", "demo");
      formData.append("shopname", "demo");




      this.registerService.registerUser(formData).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['company/kyb']);
          toast.success('Registration successful');
        },
        error: () => toast.error('Registration failed')
      });

    }
  }
}
