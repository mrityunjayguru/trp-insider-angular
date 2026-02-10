import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-working-days',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './working-days.html',
  styleUrl: './working-days.css',
})
export class WorkingDays {
  workingDaysForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.workingDaysForm = this.fb.group({
      monday: [false],
      tuesday: [false],
      wednessday: [false],
      thursday: [false],
      friday: [false],
      saturday: [false],
      sunday: [false],
    }, { validators: this.atLeastOneCheckedValidator() });
  }

  atLeastOneCheckedValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;
      const isAnyChecked = Object.keys(group.controls).some(key => group.get(key)?.value);
      return isAnyChecked ? null : { requireOne: true };
    };
  }

  onSubmit() {
    if (this.workingDaysForm.invalid) {
      this.workingDaysForm.markAllAsTouched();
      return;
    }
    toast.success('Working days updated successfully!');
  }
}
