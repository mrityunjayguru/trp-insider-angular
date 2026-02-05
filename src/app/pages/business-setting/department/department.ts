import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DepartmentItem {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})

export class Department {
 departments: DepartmentItem[] = [
    { name: 'Design', isActive: true },
    { name: 'Development', isActive: true },
    { name: 'SEO', isActive: false },
    { name: 'Marketing', isActive: true }
  ];

  toggleStatus(dept: DepartmentItem) {
    dept.isActive = !dept.isActive;
    console.log(`${dept.name} is now ${dept.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(dept: DepartmentItem) {
    console.log('Edit department:', dept);
    // Add your edit logic here
  }
  
}

