import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface listGPS {
  deviceId : number
  name: string;
  type : string;
  assigned : string;
  isActive: boolean;
}


@Component({
  selector: 'app-list-gps',
  imports: [CommonModule],
  templateUrl: './list-gps.html',
  styleUrl: './list-gps.css',
})
export class ListGps {
   listGPSData: listGPS[] = [
  {
    deviceId: 987654321234,
    name: 'Sentinel',
    type: 'Wired',
    assigned: 'BR01AB0001',
    isActive: true
  },
  {
    deviceId: 987654321234,
    name: 'Sentinel',
    type: 'Wired',
    assigned: 'DL04C3777',
    isActive: true
  },
  {
    deviceId: 987654321232,
    name: 'MagSafe',
    type: 'Wireless',
    assigned: 'Unassigned',
    isActive: false
  },
  {
    deviceId: 987654321234,
    name: 'Sentinel',
    type: 'Wired',
    assigned: 'HR26TC3522',
    isActive: true
  }
];

 toggleStatus(list: listGPS) {
    list.isActive = !list.isActive;
    console.log(`${list.name} is now ${list.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(list: listGPS) {
    console.log('Edit department:', list);
    // Add your edit logic here
  }

}
