import { ZardTabComponent, ZardTabGroupComponent } from '@/shared/components/tabs';
import { Component } from '@angular/core';
import { Department } from "./department/department";
import { Designation } from "./designation/designation";
import { WorkingDays } from "./working-days/working-days";
import { OfficeLocation } from "./office-location/office-location";
import { WorkShift } from "./work-shift/work-shift";

@Component({
  selector: 'app-business-setting',
  imports: [ZardTabComponent, ZardTabGroupComponent, Department, Designation, WorkingDays, OfficeLocation, WorkShift],
  templateUrl: './business-setting.html',
  styleUrl: './business-setting.css',
})
export class BusinessSetting {

}
