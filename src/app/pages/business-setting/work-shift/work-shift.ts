import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../../../apiservice';


interface WorkShiftItem {
  name: string;
  startTime : string;
  endTime : string;
  isActive: boolean;
}

@Component({
  selector: 'app-work-shift',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './work-shift.html',
  styleUrl: './work-shift.css',
})


export class WorkShift {
  formsize!:FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  departments:any;
  
  allallcompany:any;

  startPeriod: string = 'AM';
  endPeriod: string = 'AM';
  updateStartPeriod(event: any) {
    const timeValue = event.target.value; 

    if (timeValue) {
      const hour = Number(timeValue.split(':')[0]);

      this.startPeriod = hour >= 12 ? 'PM' : 'AM';
    }
  }
  updateEndPeriod(event: any) {
    const timeValue = event.target.value;

    if (timeValue) {
      const hour = Number(timeValue.split(':')[0]);

      this.endPeriod = hour >= 12 ? 'PM' : 'AM';
    }
  }

    toggleStatus(wst: WorkShiftItem) {
    wst.isActive = !wst.isActive;
    console.log(`${wst.name} is now ${wst.isActive ? 'Active' : 'Inactive'}`);
  }
  editDepartment(wst: WorkShiftItem) {
    console.log('Edit department:', wst);
    // Add your edit logic here
  }
  constructor(formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    
    this.formsize = this.formBuilder.group({
      workshiftname:['',Validators.required],
      workshiftstarttime:[''],
      workshiftendtime:[''],
      company_id:['12'],
      company_name:['NIIT Ltd'],     
    });




    


      

    this.apiService.getAllWorkShift().subscribe(
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


  }

  onSubmit(){

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
   
   this.apiService.saveWorkShift(formData).subscribe(
    (response : any) => {
      
      


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

