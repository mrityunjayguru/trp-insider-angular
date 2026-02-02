
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.component.html',
  styleUrls: ['./bloodgroup.component.css']
})




export class BloodgroupComponent {
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
      bloodgroupname:['',Validators.required],      

    });
      

    this.apiService.getAllBloodGroup().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("getAllBloodGroup");
        console.log(this.departments);
        console.log("getAllBloodGroup");
          
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
formData.append('bloodgroup', JSON.stringify(payload));
   
   this.apiService.saveBloodGroup(formData).subscribe(
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


