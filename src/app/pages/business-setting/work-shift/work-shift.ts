import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface WorkShiftItem {
  name: string;
  startTime : string;
  endTime : string;
  isActive: boolean;
}

@Component({
  selector: 'app-work-shift',
  imports: [CommonModule],
  templateUrl: './work-shift.html',
  styleUrl: './work-shift.css',
})
export class WorkShift {
 departments: WorkShiftItem[] = [
    { name: 'Morning Shift',startTime:"5:45", endTime:"6:08" , isActive: true },
    { name: 'Evening Shift',startTime:"5:45", endTime:"6:08" , isActive: true },
    { name: 'Afternoon Shift', startTime:"5:45", endTime:"6:08" , isActive: false },
    { name: 'Night Shift',startTime:"5:45", endTime:"6:08" , isActive: true }
  ];

  startPeriod: string = 'AM';
  endPeriod: string = 'AM';
  updateStartPeriod(event: any) {
    const timeValue = event.target.value; 

    if (timeValue) {
      const hour = Number(timeValue.split(':')[0]);

      this.startPeriod = hour >= 12 ? 'PM' : 'AM';
    }
  }
  updateEndPeriod(event: any) {
    const timeValue = event.target.value;

    if (timeValue) {
      const hour = Number(timeValue.split(':')[0]);

      this.endPeriod = hour >= 12 ? 'PM' : 'AM';
    }
  }

    toggleStatus(wst: WorkShiftItem) {
    wst.isActive = !wst.isActive;
    console.log(`${wst.name} is now ${wst.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(wst: WorkShiftItem) {
    console.log('Edit department:', wst);
    // Add your edit logic here
  }
}
