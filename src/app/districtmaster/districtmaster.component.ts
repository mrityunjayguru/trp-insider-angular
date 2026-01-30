import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-districtmaster',
  templateUrl: './districtmaster.component.html',
  styleUrls: ['./districtmaster.component.css']
})

export class DistrictmasterComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  states:any;
  logService : any;
  allallcompany:any;
  alldistricts:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      districtName:['',Validators.required],
      state_id:[''],
      countryid:['1'],
      countryname:['India'],
      stateid:[''],
      statename:['']

    });
      

    this.apiService.getAllState().subscribe(
      (response : any) => {
               
        this.states = response.data;
        console.log("States");
        console.log(this.states);
        console.log("States");

          
      })


      this.apiService.getAllDistrict().subscribe(
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
    stateMasterObj: {
      id: this.formsize.value.state_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'districts',
    JSON.stringify(payload)
  );
   
   this.apiService.saveDistrict(formData).subscribe(
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

  const state = this.states.find((c: { id: any; }) => c.id == value);
  
  
  this.formsize.patchValue({
    statename: state ? state.statename : ''
  });
}

}

