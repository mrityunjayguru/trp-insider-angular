import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../../../apiservice';
import {  AfterViewInit ,ViewChild, ElementRef} from '@angular/core';


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

interface OffLocation {
  name: string;
  state : string
  isActive: boolean;
}


@Component({
  selector: 'app-vehicles',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements AfterViewInit {

vehicleTypes:any;
vehicleTypesBrands:any;

fuelTypes:any;

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

 

  formsize!:FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  departments:any;
  
  allallcompany:any;
  allStae:any;
  allDistrict:any;

  isEditMode = false;
  selectedDeptId: number | null = null;
  
    map:any;
    marker:any;
    @ViewChild('searchBox') searchBox!: ElementRef;


  officeName = '';
  officeAddress = '';
  state = '';
  district = '';
  statesList = ['Tamil Nadu', 'Kerala', 'Karnataka'];
  districtsList = ['Chennai', 'Coimbatore', 'Madurai'];

  toggleStatus(off: any) {
    off.isActive = !off.isActive;
    console.log(`${off.name} is now ${off.isActive ? 'Active' : 'Inactive'}`);
  }


    editDepartment(dept: any) {

    console.log(" Editadble Data ");
    console.log(dept);
    console.log(" Editadble Data ");


  this.isEditMode = true;
  this.selectedDeptId = dept.id; 

 


  this.formsize.patchValue({
      id:dept.id,    
      vehicletypename:dept.vehicletypename,
      vehicletypeid:dept.vehicletypeid,
      vehicletypemakerorbrand:dept.vehicletypemakerorbrand,
    vehicletypemakerorbrandid:dept.vehicletypemakerorbrandid,
    vehicletyperegname:dept.vehicletyperegname,
    fuletypename:dept.fuletypename,
    fuletypeid:dept.fuletypeid,

    gpsdevicename:dept.gpsdevicename,
    gpsdeviceid:dept.gpsdeviceid,

    ownedbyname:dept.ownedbyname,
     ownedbyid:dept.ownedbyid,
        
        
    });


// 2️⃣ Load districts based on state
  this.apiService.getDistrictsByState(dept.stateid).subscribe(
    (response: any) => {
      this.allDistrict = response.data;
      console.log('Districts', this.allDistrict);

      // 3️⃣ Patch district ONLY after districts are loaded
      this.formsize.patchValue({
        districtid: Number(dept.districtid), // ensure type match
        districtname: dept.districtname
      });
    },
    (error) => {
      console.error('Error loading districts', error);
    }
  );

}

resetForm() {
  this.formsize.reset();
  this.isEditMode = false;
  this.selectedDeptId = null;
  window.location.reload();
}

  constructor(formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    
    this.formsize = this.formBuilder.group({
      id:[''],
      vehicletypename:[''],
      vehicletypeid:[''],
    
    vehicletypemakerorbrand:[''],
    vehicletypemakerorbrandid:[''],
    vehicletyperegname:[''],
    fuletypename:[''],
    fuletypeid:[''],

    gpsdevicename:[''],
    gpsdeviceid:[''],

    ownedbyname:[''],
     ownedbyid:[''],
           
    });





    this.apiService.getAllVehicleType().subscribe(
      (response : any) => {               
        this.vehicleTypes = response.data;
        console.log("this.vehicleTypes");
        console.log(this.vehicleTypes);
        console.log("this.vehicleTypes");          
      })

    
      


      
    this.apiService.getAllFuelType().subscribe(
      (response : any) => {               
        this.fuelTypes = response.data;
        console.log("this.fuelTypes");
        console.log(this.fuelTypes);
        console.log("this.fuelTypes");          
      })

      

    this.apiService.getAllAddVehicles().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("Department");
        console.log(this.departments);
        console.log("Department");

          
      })


      this.apiService.getAllAllCompany().subscribe(
      (response : any) => {
               
        this.allallcompany = response.data.content;
             
        
      })


      this.apiService.getAllState().subscribe(
      (response : any) => {
        this.allStae = response.data;
        console.log("======this.allStae=============");
        console.log(this.allStae);
        console.log("======this.allStae=============");

        
      })


       this.apiService.getDistrictsByState(10).subscribe(
      (response : any) => {
        this.allDistrict = response.data;
        console.log(" Distric ");
        console.log( this.allDistrict );
        console.log(" Distric ");
     
      })





  }

  
onDistrictChange(event: Event): void {
  const districid = (event.target as HTMLSelectElement).value;
  

  const selectedState = this.allDistrict.find(
    (s: any) => s.id == districid
  );

  if (selectedState) {
    this.formsize.patchValue({
      districtname: selectedState.districtName
    });
  } else {
    this.formsize.patchValue({
      districtname: ''
    });
  }
}


  
  
onStateChange(event: Event): void {
  const stateId = (event.target as HTMLSelectElement).value;
  

 this.apiService.getDistrictsByState(stateId).subscribe(
      (response : any) => {
        this.allDistrict = response.data;
        console.log(" Distric ");
        console.log( this.allDistrict );
        console.log(" Distric ");
     
      })





  const selectedState = this.allStae.find(
    (s: any) => s.id == stateId
  );

  if (selectedState) {
    this.formsize.patchValue({
      statename: selectedState.statename
    });
  } else {
    this.formsize.patchValue({
      statename: ''
    });
  }
}


 
onVehicletypeChange(event: Event): void {
  const stateId = (event.target as HTMLSelectElement).value;
//getVehicleTypeBrandByVehicleType

this.apiService.getVehicleTypeBrandByVehicleType(stateId).subscribe(
      (response : any) => {
        this.vehicleTypesBrands = response.data;
        console.log(" vehicleTypesBrands ");
        console.log( this.vehicleTypesBrands );
        console.log(" vehicleTypesBrands ");
     
      })

  const selectedState = this.vehicleTypes.find(
    (s: any) => s.id == stateId
  );

  if (selectedState) {
    this.formsize.patchValue({
      vehicletypename: selectedState.vehicletypename
    });
  } else {
    this.formsize.patchValue({
      vehicletypename: ''
    });
  }
}



onVehicletypeBrandChange(event: Event): void {
  
  const stateId = (event.target as HTMLSelectElement).value;
  
  const selectedState = this.vehicleTypesBrands.find(
    (s: any) => s.id == stateId
  );

  if (selectedState) {
    this.formsize.patchValue({
      vehicletypemakerorbrand: selectedState.vehicletypebrandname
    });
  } else {
    this.formsize.patchValue({
      vehicletypemakerorbrand: ''
    });
  }

  
}


onFuleTypeChange(event: Event): void {
  
  const stateId = (event.target as HTMLSelectElement).value;
  const selectedState = this.fuelTypes.find(
    (s: any) => s.id == stateId
  );

  if (selectedState) {
    this.formsize.patchValue({
      fuletypename: selectedState.fueltypename
    });
  } else {
    this.formsize.patchValue({
      fuletypename: ''
    });
  }

  
}


  onSubmit(){

    

    if (
            this.formsize.value.vehicletypename === undefined ||
            this.formsize.value.vehicletypename.length === 0
      ) {

          alert(" Vehicle type name is required.");
          return;
      }
     
      else if (
            this.formsize.value.vehicletypemakerorbrand === undefined ||
            this.formsize.value.vehicletypemakerorbrand.length === 0
      ) {

          alert(" Vehicle type maker or brand is required.");
          return;
      }
    else if (
            this.formsize.value.vehicletyperegname === undefined ||
            this.formsize.value.vehicletyperegname.length === 0
      ) {

          alert(" Vehicle type regname is required.");
          return;
      }
      else if (
            this.formsize.value.fuletypename === undefined ||
            this.formsize.value.fuletypename.length === 0
      ) {

          alert(" Fule type name  is required.");
          return;
      }
      else if (
            this.formsize.value.gpsdevicename === undefined ||
            this.formsize.value.gpsdevicename.length === 0
      ) {

          alert(" Gps device name  is required.");
          return;
      }
      else if (
            this.formsize.value.ownedbyname === undefined ||
            this.formsize.value.ownedbyname.length === 0
      ) {

          alert(" Owned by name  is required.");
          return;
      }

      else
      {

        if (this.isEditMode) {
                  this.updateData();
                // this.resetForm();
                  
            } else {
                  this.saveData();
                  //this.resetForm();
                
            }
        }


}

updateData()
{
  const payload = {
    ...this.formsize.value,   // existing form fields
    companyobj: {
      id: this.formsize.value.company_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'update',
    JSON.stringify(payload)
  );
   
   this.apiService.updateAddVehicles(formData).subscribe(
    (response : any) => {
      
      if(response.status ==200)
      {
        alert("Data updated Successfully.");
        this.resetForm();
      }
      else
      {
         alert("Not Add");
      }
    })
}

saveData()
{
  const payload = {
    ...this.formsize.value,   // existing form fields
    companyobj: {
      id: this.formsize.value.company_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'save',
    JSON.stringify(payload)
  );
   
   this.apiService.saveAddVehicles(formData).subscribe(
    (response : any) => {
      
      if(response.status ==200)
      {
        alert("Data Added Successfully.");
        this.resetForm();
      }
      else
      {
         alert("Not Add");
      }
    })
}


onCompanyChange(event: any) {
  
   const value = (event.target as HTMLSelectElement).value;

  const company = this.allallcompany.find((c: { id: any; }) => c.id == value);
  
  
  this.formsize.patchValue({
    company_name: company ? company.companyName : ''
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
      address:this.searchBox.nativeElement.value,
      officeaddress:this.searchBox.nativeElement.value
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



