
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-vehicletypebrand',
  templateUrl: './vehicletypebrand.component.html',
  styleUrls: ['./vehicletypebrand.component.css']
})

export class VehicletypebrandComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  vehicletypes:any;
  logService : any;
  allallcompany:any;
  alldistricts:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      vehicletypebrandname:['',Validators.required],
      vehicletype_id:[''],
      vehicletypename:['']

    });
      

    this.apiService.getAllVehicleType ().subscribe(
      (response : any) => {
               
        this.vehicletypes = response.data;
        console.log("vehicletypes");
        console.log(this.vehicletypes);
        console.log("vehicletypes");

          
      })


      this.apiService.getAllVehicleTypeBrand().subscribe(
      (response : any) => {
               
        this.alldistricts = response.data;
        console.log("district");
        console.log(this.alldistricts);
        console.log("district");
             
        
      })


  }

  onSubmit(){
  
  // var formData = new FormData();  

  // formData.append("sizemasterdata", JSON.stringify(this.formsize.value));
   
  const payload = {
    ...this.formsize.value,   // existing form fields
    vehicleTypeObj: {
      id: this.formsize.value.vehicletype_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'vehicleTypeBrand',
    JSON.stringify(payload)
  );
   
   this.apiService.saveVehicleTypeBrand(formData).subscribe(
    (response : any) => {
      
      this.logService.clog(response,false);


      if(response.status ==200)
      {
        alert("District Added Successfully.");
      }
      else
      {
         alert("Not Add");
      }
    })


}


onStateChange(event: any) {
  
   const value = (event.target as HTMLSelectElement).value;

  const vehicletype = this.vehicletypes.find((c: { id: any; }) => c.id == value);
  
  console.log("vehicletype");
  console.log("vehicletype");
  console.log("vehicletype");
  console.log(vehicletype);
  console.log("vehicletype");
  console.log("vehicletype");



  
  this.formsize.patchValue({
    vehicletypename: vehicletype ? vehicletype.vehicletypename : ''
  });
}

}


