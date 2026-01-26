import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-employmenttypemaster',
  templateUrl: './employmenttypemaster.component.html',
  styleUrls: ['./employmenttypemaster.component.css']
})

export class EmploymenttypemasterComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  allemploymenttype:any;
  logService : any;
  allallcompany:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      employmenttypename:['',Validators.required],
      

    });
      

    this.apiService.getAllEmploymentType().subscribe(
      (response : any) => {               
        this.allemploymenttype = response.data;
        console.log("getAllEmploymentType");
        console.log(this.allemploymenttype);
        console.log("getAllEmploymentType");
          
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
   
   this.apiService.saveEmploymentType(formData).subscribe(
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

