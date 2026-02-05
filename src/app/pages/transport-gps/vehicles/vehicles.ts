import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface VehicleItem {
  vehicle: string;
  regNo: string;
  makeBrand: string;
  fuel: string;
  gpsId: number;
  gpsType: string;
  ownership: string;
  isActive: boolean;
}


@Component({
  selector: 'app-vehicles',
  imports: [CommonModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles {
  vehicleList: VehicleItem[] = [
  {
    vehicle: 'Truck',
    regNo: 'BR01AB0001',
    makeBrand: 'Ashok Leyland',
    fuel: 'Diesel',
    gpsId: 987654321234,
    gpsType: 'Wired',
    ownership: 'Company',
    isActive: true
  },
  {
    vehicle: 'Pickup',
    regNo: 'HR26TC3522',
    makeBrand: 'Mahindra',
    fuel: 'Diesel',
    gpsId: 987654321238,
    gpsType: 'Wireless',
    ownership: 'Company',
    isActive: true
  },
  {
    vehicle: 'Three Wheeler',
    regNo: 'UP14GB0007',
    makeBrand: 'Bajaj',
    fuel: 'Electric',
    gpsId: 987654321232,
    gpsType: 'Wireless',
    ownership: 'Employee',
    isActive: false
  },
  {
    vehicle: 'Motorcycle',
    regNo: 'DL04C3777',
    makeBrand: 'Ducati',
    fuel: 'Petrol',
    gpsId: 987654321255,
    gpsType: 'Wired',
    ownership: 'Employee',
    isActive: true
  }
];

 toggleStatus(vehicle: VehicleItem) {
    vehicle.isActive = !vehicle.isActive;
    console.log(`${vehicle.vehicle} is now ${vehicle.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(vehicle: VehicleItem) {
    console.log('Edit department:', vehicle);
    // Add your edit logic here
  }
}
