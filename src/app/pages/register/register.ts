
import { RegisterFooter } from "@/shared/register-footer/register-footer";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../apiservice';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RegisterFooter, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})





export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: ApiService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      mobile: ['']      
    });
  }

  sendOtp(): void {
    if (this.registerForm.get('mobile')?.invalid) {
      this.registerForm.get('mobile')?.markAsTouched();
      return;
    }

    const mobile = this.registerForm.value.mobile;

  /*  this.registerService.sendOtp(mobile).subscribe({
      next: () => alert('OTP sent successfully'),
      error: () => alert('Failed to send OTP')
    });*/
  }

  onSubmit(): void {
    
    if (this.registerForm.invalid) return;

    console.log("=======================");
    console.log(this.registerForm.value);
   console.log("=======================");

    var formData = new FormData();
      formData.append("mobile",this.registerForm.value.mobile);
      formData.append("firstname","demo");
      formData.append("shopname","demo");

     

   
    this.registerService.registerUser(formData).subscribe({
      next: (res) => {
        console.log(res);
        alert('Registration successful');
      },
      error: () => alert('Registration failed')
    });
  }
}
