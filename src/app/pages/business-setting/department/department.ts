import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../../../apiservice';




interface DepartmentItem {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-department',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})


export class Department {
  formsize!:FormGroup;
  formBuilder: any;
  apiService: ApiService;
  sizes:any;
  departments:any;
  
  allallcompany:any;

  isEditMode = false;
  selectedDeptId: number | null = null;

  

  toggleStatus(dept: any) {
          var isConfirmed = confirm("Are you sure about the transaction?");
          if(isConfirmed)
          {
                  dept.deleted = !dept.deleted;
                  const formData = new FormData();
                  formData.append('id', dept.id);
                  formData.append('deleted', dept.deleted);
                  this.apiService.updateDepartmentDeleted(formData).subscribe(
                  (response:any) => {
                    alert(response.mesage);
                    window.location.reload();
                  })
          }
  }
  

  editDepartment(dept: any) {
  this.isEditMode = true;
  this.selectedDeptId = dept.id; // or dept._id based on backend

  this.formsize.patchValue({
    deptname: dept.deptname,
    id:dept.id
  });
}


resetForm() {
  this.formsize.reset();
  this.isEditMode = false;
  this.selectedDeptId = null;
}

  constructor(formBuilder: FormBuilder,   apiService: ApiService){
    this.formBuilder=formBuilder;
    this.apiService = apiService;
    
    this.formsize = this.formBuilder.group({
      id:[''],
      deptname:['',Validators.required],
      
      company_id:['12'],
      company_name:['NIIT Ltd'],     
    });




    


      

    this.apiService.getAllDepartment().subscribe(
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
            this.formsize.value.deptname === undefined ||
            this.formsize.value.deptname.length === 0
      ) {

          alert(" Department name is required.");
          return;
      }
      else
      {
            if (this.isEditMode) {
                    this.updateDepartment();
                    this.resetForm();
                    
              } else {
                    this.saveDepartment();
                    this.resetForm();
                  
              }
     }     

}


showAllData()
{

  this.resetForm();
   
   this.apiService.getAllDepartment().subscribe(
      (response : any) => {
               
        this.departments = response.data;
        console.log("Department");
        console.log(this.departments);
        console.log("Department");
        window.location.reload();

          
      })
}

saveDepartment()
{

    
  const payload = {
    ...this.formsize.value,   // existing form fields
    companyobj: {
      id: this.formsize.value.company_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'department',
    JSON.stringify(payload)
  );
   
   this.apiService.saveDepartment(formData).subscribe(
    (response : any) => {
      
      


      if(response.status ==200)
      {
        alert("Data Added Successfully.");
        this.showAllData();
      }
      else
      {
         alert("Not Add");
      }
    })
}


updateDepartment()
{

    
    
  const payload = {
    ...this.formsize.value,   // existing form fields
    companyobj: {
      id: this.formsize.value.company_id                  // or this.formsize.value.companyId
    }
  };

  const formData = new FormData();
  formData.append(
    'department',
    JSON.stringify(payload)
  );
   
   this.apiService.updateDepartment(formData).subscribe(
    (response : any) => {

      if(response.status ==200)
      {
        alert("Data Updated Successfully.");
        this.showAllData();
      }
      else
      {
         alert("Not Updated");
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
