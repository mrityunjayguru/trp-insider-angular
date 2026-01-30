import { Component } from '@angular/core';
import { MapplsService } from '../mappls-service.service';

@Component({
  selector: 'app-npickuppoint-component',
  templateUrl: './npickuppoint-component.component.html',
  styleUrls: ['./npickuppoint-component.component.css']
})




export class NPickuppointComponentComponent {

  address = 'Delhi';
  latitude: number | null = null;
  longitude: number | null = null;
  error = '';

  constructor(private mapplsService: MapplsService) {

    this.findLatLng();
  }

  findLatLng() {
    this.error = '';
    this.latitude = null;
    this.longitude = null;

    this.mapplsService.getLatLng(this.address).subscribe({
      next: (res) => {
        if (res?.copResults?.length > 0) {
          const location = res.copResults[0];
          this.latitude = location.latitude;
          this.longitude = location.longitude;

          console.log('Location:  location');
          console.log('Location:  location');
          console.log('Location:  location');
          console.log('Location:  location');
          console.log(location);
          console.log('Location:  location');
          console.log('Location:  location');
          console.log('Location:  location');
          console.log('Location:  location');

        } else {
          this.error = 'No location found';
        }
      },
      error: () => {
        this.error = 'Failed to fetch location';
      }
    });
  }
}
