import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';



@Component({
  selector: 'app-fuletype',
  templateUrl: './fuletype.component.html',
  styleUrls: ['./fuletype.component.css']
})



export class FuletypeComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  departments:any;
  logService : any;
  allallcompany:any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      fueltypename:['',Validators.required],
      

    });
      

    this.apiService.getAllFuelType().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("getAllFuelType");
        console.log(this.departments);
        console.log("getAllFuelType");
          
      })


      this.apiService.getAllState().subscribe(
      (response : any) => {
               
        this.allallcompany = response.data.content;
             
        
      })


  }

  onSubmit(){
  
  // var formData = new FormData();  

  // formData.append("sizemasterdata", JSON.stringify(this.formsize.value));
   const payload = this.formsize.value;

const formData = new FormData();
formData.append('save', JSON.stringify(payload));

console.log("Payload being sent:", payload);
   
   this.apiService.saveFuelType(formData).subscribe(
    (response : any) => {
      
      this.logService.clog(response,false);


      if(response.status ==200)
      {
        alert("Data Added Successfully.");
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


