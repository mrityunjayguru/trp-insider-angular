import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DesignationItem {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation {
 departments: DesignationItem[] = [
    { name: 'Director', isActive: true },
    { name: 'Supervisor', isActive: true },
    { name: 'Foreman', isActive: false },
    { name: 'Delivery Driver', isActive: true }
  ];

  toggleStatus(deg: DesignationItem) {
    deg.isActive = !deg.isActive;
    console.log(`${deg.name} is now ${deg.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(deg: DesignationItem) {
    console.log('Edit department:', deg);
    // Add your edit logic here
  }
  
}

