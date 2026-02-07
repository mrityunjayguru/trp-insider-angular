import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

interface OffLocation {
  name: string;
  state: string
  isActive: boolean;
}

@Component({
  selector: 'app-office-location',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './office-location.html',
  styleUrl: './office-location.css',
})

export class OfficeLocation {

  departments: OffLocation[] = [
    { name: 'Delhi', state: "Delhi", isActive: true },
    { name: 'Haryana', state: "Haryana", isActive: true },
    { name: 'Punjab', state: "Punjab", isActive: false },
    { name: 'Bihar', state: "Bihar", isActive: true }
  ];

  officeLocationForm!: FormGroup;
  statesList = ['Tamil Nadu', 'Kerala', 'Karnataka'];
  districtsList = ['Chennai', 'Coimbatore', 'Madurai'];

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.officeLocationForm = this.fb.group({
      officeName: ['', Validators.required],
      officeAddress: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.officeLocationForm.invalid) {
      this.officeLocationForm.markAllAsTouched();
      return;
    }
    console.log('Form Submitted', this.officeLocationForm.value);
    // Add save logic here
  }



  toggleStatus(off: OffLocation) {
    off.isActive = !off.isActive;
    console.log(`${off.name} is now ${off.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(deg: OffLocation) {
    console.log('Edit department:', deg);
    // Add your edit logic here
  }
}
