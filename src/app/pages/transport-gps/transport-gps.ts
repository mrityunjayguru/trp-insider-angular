import { Component } from '@angular/core';
import { ZardTabComponent, ZardTabGroupComponent } from "@/shared/components/tabs";
import { Vehicles } from "./vehicles/vehicles";
import { ListGps } from "./list-gps/list-gps";

@Component({
  selector: 'app-transport-gps',
  standalone: true,
  imports: [ZardTabComponent, ZardTabGroupComponent, Vehicles, ListGps],
  templateUrl: './transport-gps.html',
  styleUrl: './transport-gps.css',
})
export class TransportGps {

}
