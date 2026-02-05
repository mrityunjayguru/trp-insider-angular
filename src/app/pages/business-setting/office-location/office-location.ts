import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface OffLocation {
  name: string;
  state : string
  isActive: boolean;
}

@Component({
  selector: 'app-office-location',
  imports: [CommonModule],
  templateUrl: './office-location.html',
  styleUrl: './office-location.css',
})

export class OfficeLocation {

  departments: OffLocation[] = [
    { name: 'Delhi',state :"Delhi", isActive: true },
    { name: 'Haryana',state :"Haryana", isActive: true },
    { name: 'Punjab',state :"Punjab", isActive: false },
    { name: 'Bihar',state :"Bihar", isActive: true }
  ];

officeName = '';
  officeAddress = '';
  state = '';
  district = '';
  statesList = ['Tamil Nadu', 'Kerala', 'Karnataka'];
  districtsList = ['Chennai', 'Coimbatore', 'Madurai'];

  toggleStatus(off: OffLocation) {
    off.isActive = !off.isActive;
    console.log(`${off.name} is now ${off.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(deg: OffLocation) {
    console.log('Edit department:', deg);
    // Add your edit logic here
  }
}
