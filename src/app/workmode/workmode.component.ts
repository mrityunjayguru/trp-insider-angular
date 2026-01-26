import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-workmode',
  templateUrl: './workmode.component.html',
  styleUrls: ['./workmode.component.css']
})


export class WorkmodeComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  allworkmode:any;
  logService : any;
  allallcompany:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      workmodename:['',Validators.required],
      

    });
      

    this.apiService.getAllWorkMode().subscribe(
      (response : any) => {               
        this.allworkmode = response.data;
        console.log("getAllWorkMode");
        console.log(this.allworkmode);
        console.log("getAllWorkMode");
          
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
    'workmodemasterData',
    JSON.stringify(payload)
  );
   
   this.apiService.saveWorkMode(formData).subscribe(
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


onCompanyChange(event: any) {
  
   const value = (event.target as HTMLSelectElement).value;

  const company = this.allallcompany.find((c: { id: any; }) => c.id == value);
  
  
  this.formsize.patchValue({
    company_name: company ? company.companyName : ''
  });
}

}

