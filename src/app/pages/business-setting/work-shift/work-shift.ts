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

    isEditMode = false;
    selectedDeptId: number | null = null;

  
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

   toggleStatus(dept: any) {
          var isConfirmed = confirm("Are you sure about the transaction?");
          if(isConfirmed)
          {
                  dept.deleted = !dept.deleted;
                  const formData = new FormData();
                  formData.append('id', dept.id);
                  formData.append('deleted', dept.deleted);
                  this.apiService.updateWorkShiftDeleted(formData).subscribe(
                  (response:any) => {
                    alert(response.mesage);
                    window.location.reload();
                  })
          }
  }


  editDepartment(dept: any) {


  this.isEditMode = true;
  this.selectedDeptId = dept.id; 

  this.formsize.patchValue({
        workshiftname: dept.workshiftname,
        id:dept.id,
        workshiftstarttime:this.formatTime(dept.workshiftstarttime),
        workshiftendtime:this.formatTime(dept.workshiftendtime),
    });
}



formatTime(timeArr: number[]): string {
  if (!timeArr || timeArr.length !== 2) return '';
  return `${timeArr[0].toString().padStart(2, '0')}:${timeArr[1].toString().padStart(2, '0')}`;
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
      workshiftname:['',Validators.required],
      workshiftstarttime:[''],
      workshiftendtime:[''],
      id:[''],
      company_id:['12'],
      company_name:['NIIT Ltd'] 
        
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
    if (
            this.formsize.value.workshiftname === undefined ||
            this.formsize.value.workshiftname.length === 0
      ) {

          alert(" Work shift name   is required.");
          return;
      }
      
    else if (
            this.formsize.value.workshiftstarttime === undefined ||
            this.formsize.value.workshiftstarttime.length === 0
      ) {

          alert(" Work shift start time is required.");
          return;
      }
      else if (
            this.formsize.value.workshiftendtime === undefined ||
            this.formsize.value.workshiftendtime.length === 0
      ) {

          alert(" Work shift end time is required.");
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
   
   this.apiService.updateWorkShift(formData).subscribe(
    (response : any) => {
      
      
      if(response.status ==200)
      {
        alert("Data Updated Successfully.");
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
   
   this.apiService.saveWorkShift(formData).subscribe(
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

}

