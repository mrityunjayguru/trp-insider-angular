import { Component ,NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
import * as L from 'leaflet';
import {  AfterViewInit ,ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-pickuppoint',
  templateUrl: './pickuppoint.component.html',
  styleUrls: ['./pickuppoint.component.css']
})



export class PickuppointComponent  implements AfterViewInit {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  logService : any;

    map:any;
    marker:any;

  @ViewChild('searchBox') searchBox!: ElementRef;


   center = { lat: 20.5937, lng: 78.9629 }; // default center (India)
  zoom = 5;

  markerPosition: google.maps.LatLngLiteral | null = null;
  zone: any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      pickupname:['',Validators.required],
      pickupdistance:['',Validators.required],
      pickupstatus:['',Validators.required],
      pickupduration:['',Validators.required],
      dropoffduration:['',Validators.required],
      latitude:[''],
      longitude:['']

    });




    this.apiService.getAllPickupPoint().subscribe(
      (response : any) => {

        console.log("==================");
        console.log(response);
        console.log("==================");


               
        this.sizes = response.data.content;

        
        console.log("=========this.sizes=========");
        console.log(this.sizes);
        console.log("======this.sizes============");

        
        this.logService.clog(this.sizes,false);
    
        
      })



  }




  
  onSubmit(){
  
   var formData = new FormData();  

   formData.append("pickuppoint", JSON.stringify(this.formsize.value));
   
   this.apiService.savePickupPoint(formData).subscribe(
    (response : any) => {
      
      this.logService.clog(response,false);


      if(response.status ==200)
      {
        alert("Size Added Successfully.");
      }
      else
      {
         alert("Not Add");
      }
    })


}

 
 

  
  
  ngAfterViewInit(): void {
    // slight delay ensures Google API is ready
    setTimeout(() => this.initMap(), 0);
  }

initMap(): void {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const location = { lat: 28.6139, lng: 77.2090 };

  this.map = new google.maps.Map(mapElement, {
    center: location,
    zoom: 12
  });

  this.placeMarker(location.lat, location.lng);

  // 🔍 SEARCH AUTOCOMPLETE
  const autocomplete = new google.maps.places.Autocomplete(
    this.searchBox.nativeElement,
    {
      fields: ['geometry', 'name'],
    }
  );

  autocomplete.bindTo('bounds', this.map);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      return;
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    // 🎯 Move map & marker
    this.map.setCenter({ lat, lng });
    this.map.setZoom(15);

    this.placeMarker(lat, lng);
  });

  // 🖱 map click
  this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;
    this.placeMarker(event.latLng.lat(), event.latLng.lng());
  });
}


  placeMarker(lat: number, lng: number): void {

    console.log('Lat:', lat, 'Lng:', lng);

    const position = new google.maps.LatLng(lat, lng);

    if (this.marker) {
      this.marker.setPosition(position);
    } else {
      this.marker = new google.maps.Marker({
        position,
        map: this.map,
        draggable: true
      });

      // 🔄 Drag marker
      this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
  if (!event.latLng) return;

  this.placeMarker(
    event.latLng.lat(),
    event.latLng.lng()
  );
});
    }

    // ✅ Update form (NOW Angular sees it)
    this.formsize.patchValue({
      latitude: lat,
      longitude: lng
    });
  }
}

