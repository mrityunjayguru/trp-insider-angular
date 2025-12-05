import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
   imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

   employees: any[] = [];  // <-- store employees here

   addemployee = {
    name: '',
    email: '',
    salary: null
  };

   constructor(private empService: EmployeeService) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getAllEmployees().subscribe({
      next: (response) => {
        console.log("API Response:", response);
        this.employees = response;   // <-- save data to array
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }

  saveEmployee() {


    console.log("Sending:", this.addemployee);

    this.empService.createEmployee(this.addemployee).subscribe({
      next: (res) => {
        console.log("Employee created:", res);
        alert("Employee added successfully!");

        // reset form
        this.addemployee = { name: '', email: '', salary: null };
      },
      error: (err) => {
        console.error("API Error:", err);
        alert("Error creating employee"+err.message);
      }
    });
  }


}
