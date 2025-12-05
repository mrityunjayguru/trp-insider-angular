import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  constructor(private empService: EmployeeService) {


     this.empService.getAllEmployees().subscribe({
      next: (response) => {
        console.log(response);
        alert("Employee created successfully!");
      },
      error: (err) => {
        console.error(err);
        alert("Error: " + err.message);
      }
    });
  }


}
