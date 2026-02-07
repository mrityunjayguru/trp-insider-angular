import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-employee-details',
  imports: [NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  employeeForm!: FormGroup;
  showPersonalVehicleForm = false;
  employmentType: string = '';

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.employeeForm = this.fb.group({
      employmentType: ['', Validators.required],
      employeeName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      officeLocation: ['', Validators.required],
      reportingAuthority: ['', Validators.required],
      monthlyFixedSalary: [''],
      workMode: [''],
      monthlyGuaranteedSalary: [''],
      targetType: [''],
      monthlyTargetValue: [''],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      state: ['', Validators.required],
      district: ['', Validators.required],
      joiningDate: ['', Validators.required],
      uan: [''],
      pan: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      aadhaar: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      pfNumber: [''],
      pfJoiningDate: [''],
      esiNumber: [''],
      vehicleId: ['', Validators.required],
      bankName: [''],
      ifscCode: ['', Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')],
      accountNumber: [''],
      accountHolderName: [''],
      upiDetail: [''],
      bloodGroup: [''],
      emergencyContactPerson: [''],
      emergencyContactNumber: ['', Validators.pattern('^[0-9]{10}$')],
      relationWithEmployee: [''],
      employeePhoto: ['', Validators.required],
      idProof: ['', Validators.required],
      drivingLicense: ['']
    });

    this.employeeForm.get('employmentType')?.valueChanges.subscribe(value => {
      this.employmentType = value;
      this.updateConditionalValidators(value);
    });
  }

  updateConditionalValidators(type: string) {
    const regularFields = ['monthlyFixedSalary', 'workMode'];
    const targetFields = ['monthlyGuaranteedSalary', 'targetType', 'monthlyTargetValue'];
    const commissionFields = ['targetType', 'monthlyTargetValue'];

    [...regularFields, ...targetFields].forEach(field => {
      this.employeeForm.get(field)?.clearValidators();
      this.employeeForm.get(field)?.updateValueAndValidity({ emitEvent: false });
    });

    if (type === 'Regular') {
      regularFields.forEach(field => this.employeeForm.get(field)?.setValidators(Validators.required));
    } else if (type === 'Target based') {
      targetFields.forEach(field => this.employeeForm.get(field)?.setValidators(Validators.required));
    } else if (type === 'Commission based') {
      commissionFields.forEach(field => this.employeeForm.get(field)?.setValidators(Validators.required));
    }

    [...regularFields, ...targetFields].forEach(field => {
      this.employeeForm.get(field)?.updateValueAndValidity({ emitEvent: false });
    });
  }

  togglePersonalVehicleForm() {
    this.showPersonalVehicleForm = !this.showPersonalVehicleForm;
  }

  onEmploymentTypeChange(event: any) {
    // Logic handled by valueChanges subscription
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      toast.error('Please fill all required fields correctly');
      return;
    }
    toast.success('Employee details submitted successfully');
    console.log('Form Submitted', this.employeeForm.value);
  }

  previewUrl: string | ArrayBuffer | null = null;
  isSelected = true;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
