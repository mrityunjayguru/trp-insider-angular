import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '@/shared/components/pagination';
import {  FormGroup, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


import { NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../apiservice'


import {  AfterViewInit ,ViewChild, ElementRef} from '@angular/core';


interface Stop {
  id: number;
  stopName: string;
  address: string;
  department: string;
  isActive: boolean;
}

@Component({
  selector: 'app-create-stop',
  imports: [CommonModule, FormsModule, PaginationComponent, ReactiveFormsModule],
  templateUrl: './create-stop.html',
  styleUrl: './create-stop.css',
})





export class CreateStop implements OnInit,AfterViewInit {
  
  
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  departments:any;
  logService : any;

    map:any;
    marker:any;

  @ViewChild('searchBox') searchBox!: ElementRef;


   center = { lat: 20.5937, lng: 78.9629 }; // default center (India)
  zoom = 5;

  markerPosition: google.maps.LatLngLiteral | null = null;
  zone: any;

   stops: any;

  filteredStops: Stop[] = [];
  paginatedStops: Stop[] = [];
  searchQuery: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  ngOnInit() {
   // this.filteredStops = [...this.stops];
    //this.updatePagination();
  }

  onSearch() {
    
    /*
    if (this.searchQuery.trim() === '') {
      this.filteredStops = [...this.stops];
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredStops = this.stops.filter(stop =>
        stop.stopName.toLowerCase().includes(query) ||
        stop.address.toLowerCase().includes(query) ||
        stop.department.toLowerCase().includes(query)
      );
    }
    this.currentPage = 1;
    this.updatePagination(); */
  }

  toggleStatus(stop: Stop) {
    stop.isActive = !stop.isActive;
    console.log(`${stop.stopName} is now ${stop.isActive ? 'Active' : 'Inactive'}`);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredStops.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedStops = this.filteredStops.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  editStop(stop: Stop) {
    console.log('Editing stop:', stop);
    // Add your edit logic here
  }

  constructor(formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
   
    this.formsize = this.formBuilder.group({
       stopsname: [''],
       stopsdistance: [''],
       stopsstatus: [''],
       stopsduration: [''],
       dropoffduration: [''],
       latitude: [''],
       longitude: [''],
       address: [''],

     departmentid:[''],
     departmentname:['']


    });



    
      this.apiService.getAllDepartment().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("Department");
        console.log(this.departments);
        console.log("Department");

          
      })



    this.apiService.getAllStops().subscribe(
      (response : any) => {

        console.log("======stops nnnnnnnnnnnnnnnnnn============");
        console.log(response.data);
        console.log("======stops nnnnnnnnnnnnnnnnnnnnnnnn============");


               
        this.stops = response.data;

        
        console.log("=========this.stops=========");
        console.log(this.stops);
        console.log("======this.stops============");

        
        
    
        
      })



  }

  
  
onDepartmentChange(event: any) {
  const deptid = event.target.value;

  const selectedDepartment = this.departments.find(
    (departmentsdata: any) => departmentsdata.id == deptid
  );

  if (selectedDepartment) {
    this.formsize.patchValue({
      departmentname: selectedDepartment.deptname,
      
    });
  } else {
    this.formsize.patchValue({
      departmentname: ''
      
    });
  }
}




  
 onSubmit() {

  if (!this.formsize || !this.formsize.value) {
    alert("Form data is invalid.");
    return;
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(this.formsize.value));

  console.log("Form Value:", this.formsize.value);

  this.apiService.saveStops(formData).subscribe({
    next: (response: any) => {
      console.log("API Response:", response);

      if (response && response.status === 200) {
        alert("Size Added Successfully.");
      } else {
        alert("Unable to save data.");
      }
    },
    error: (error) => {
      console.error("API Error:", error);
      alert("Unable to save data. Please try again.");
    }
  });
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
      longitude: lng,
      stopsstatus:this.searchBox.nativeElement.value
    });


    console.log("this.formsize.value");
    console.log("this.formsize.value");
    console.log("this.formsize.value");
    console.log("this.formsize.value");
        console.log(this.formsize.value);
    console.log("this.formsize.value");
    console.log("this.formsize.value");
    console.log("this.formsize.value");
    console.log("this.formsize.value");


  }
}

