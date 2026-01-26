
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-commitiontype',
  templateUrl: './commitiontype.component.html',
  styleUrls: ['./commitiontype.component.css']
})


export class CommitiontypeComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  allcommission:any;
  logService : any;
  allallcompany:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      commitiontypename:['',Validators.required],
    });
      

    this.apiService.getAllCommissionType().subscribe(
      (response : any) => {               
        this.allcommission = response.data;
        console.log("getAllCommissionType");
        console.log(this.allcommission);
        console.log("getAllCommissionType");
          
      })


      


  }

  onSubmit(){
  
  // var formData = new FormData();  

  // formData.append("sizemasterdata", JSON.stringify(this.formsize.value));
   
  const payload = {
    ...this.formsize.value,   // existing form fields
    countrymasterobj: {
      id: this.formsize.value.country_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'data',
    JSON.stringify(payload)
  );
   
   this.apiService.saveCommissionType(formData).subscribe(
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




}

