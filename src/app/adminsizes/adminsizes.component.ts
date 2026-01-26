import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
@Component({
  selector: 'app-adminsizes',
  templateUrl: './adminsizes.component.html',
  styleUrls: ['./adminsizes.component.css']
})
export class AdminsizesComponent {
  formsize:any;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  logService : any;

  constructor(logService : LogService ,formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    this.logService = logService; 
    this.formsize = this.formBuilder.group({
      size:['',Validators.required]
    });




    this.apiService.getAllSize().subscribe(
      (response : any) => {
               
        this.sizes = response.data;
        this.logService.clog(this.sizes,false);
    
        
      })



  }

  onSubmit(){
  
   var formData = new FormData();  

   formData.append("sizemasterdata", JSON.stringify(this.formsize.value));
   
   this.apiService.sizemaster(formData).subscribe(
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
