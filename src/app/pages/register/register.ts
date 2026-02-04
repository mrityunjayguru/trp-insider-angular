
import { RegisterFooter } from "@/shared/register-footer/register-footer";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../apiservice';


@Component({
  selector: 'app-register',
  imports: [RegisterFooter],
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
    alert("submit button clicked");
    if (this.registerForm.invalid) return;

    this.registerService.registerUser(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert('Registration successful');
      },
      error: () => alert('Registration failed')
    });
  }
}
