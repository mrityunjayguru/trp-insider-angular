import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZardDatePickerComponent } from "@/shared/components/date-picker";

@Component({
  selector: 'app-employee-details',
  imports: [NgIf, FormsModule, ZardDatePickerComponent],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {

  showPersonalVehicleForm = false;
  employmentType: string = '';

  togglePersonalVehicleForm() {
    this.showPersonalVehicleForm = !this.showPersonalVehicleForm;
  }

  onEmploymentTypeChange(event: any) {
    this.employmentType = event.target.value;
  }

  previewUrl: string | ArrayBuffer | null = null;
  isSelected = true;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Preview Image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
