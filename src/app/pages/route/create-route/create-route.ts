import { Component, inject, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { CreateStop } from '../create-stop/create-stop';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

import { NgZone } from '@angular/core';
import { ApiService } from '../../../apiservice'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-route',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PaginationComponent, DragDropModule],
  templateUrl: './create-route.html',
  styleUrl: './create-route.css',
})
export class CreateRoute  implements OnInit{
  private fb = inject(FormBuilder);
  allofficelocation:any;
  allvehicletype:any;

  isRouteCreated = false;
  routeForm: FormGroup = this.fb.group({
    routename: ['', Validators.required],
    officelocation: ['', Validators.required],
    modeoftransport: ['', Validators.required],
    id:[''],
    selectedstops: [[]],
  });

  routeData: any = null;

  isSettingOrder = false;

  searchTerm = signal('');
  currentPage = signal(1);
  itemsPerPage = 20;
  stops:any;

constructor(private apiService: ApiService,private route:ActivatedRoute)
{

  this.apiService.getAllStops().subscribe(
      (response : any) => {
        this.stops = response.data;
          
      })

      this.apiService.getAllOfficeLocation().subscribe(
        (response : any) => {
          this.allofficelocation = response.data;
          console.log("Office Locations:", this.allofficelocation);

        })

        this.apiService.getAllVehicleType().subscribe(
          (response : any) => {
            this.allvehicletype = response.data;
            console.log("Vehicle Types:", this.allvehicletype);
          })


}
  ngOnInit(): void {



  this.route.queryParamMap.subscribe(params => {
    const id = params.get('id');

    if (id) {
           
          this.apiService.getAllStops().subscribe(
            (response : any) => {
              this.stops = response.data;
                
                })


            this.apiService.getCreateRootsById(id).subscribe(
              (response : any) => {             

                 this.routeForm.patchValue(response.data);
                 this.routeData =this.routeForm.value; 

                  console.log("=======this.routeForm.value=============");
                  console.log(this.routeForm.value);
                  console.log("=======this.routeForm.value=============");
const selectedStops = this.routeForm.value.selectedstops;

if (selectedStops && selectedStops.length !== 0) {

  console.log("Selected Stops", selectedStops);

  this.stops = this.stops.map((stop: any) => ({
    ...stop,
    selected: selectedStops.some((s: any) =>
      String(s.id) === String(stop.id)
    )
  }));

}
     
                 this.isRouteCreated = true;
                 this.setStopOrder();

                 
                })


        }
      });

    
     


  }


  filteredStops = computed(() => {
    
    return this.stops;
    /*
    const term = this.searchTerm().toLowerCase();
    

    return this.stops.filter((stop:any) =>
      stop.stopname.toLowerCase().includes(term) ||
      stop.address.toLowerCase().includes(term) ||
      stop.department.toLowerCase().includes(term)
    );*/
    
  });

  paginatedStops = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredStops().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredStops().length / this.itemsPerPage));

  onSubmit() {

  //  console.log("Submitting route form with values:", this.routeForm.value);

    if (this.routeForm.valid) {
      this.routeData = this.routeForm.value;
      this.saveData();
      this.isRouteCreated = true;
      console.log('Route submitted:', this.routeData);
    }
  }

updateData() {

  if (!this.routeForm || !this.routeForm.value) {
    alert("Form data is invalid.");
    return;
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(this.routeForm.value));

  console.log("Form Value:", this.routeForm.value);

  this.apiService.updateCreateRoots(formData).subscribe({
    next: (response: any) => {
      console.log("API Response:", response);

      if (response && response.status === 200) {

            this.routeForm.reset(response.data);
           alert("Data updated Successfully.");
        

      } else {
        alert("Unable to save data.");
      }
    },
    error: (error) => {
      console.error("API Error:", error);
      alert("Unable to save data. Please try again.");
    }
  });
}



 saveData() {

  if (!this.routeForm || !this.routeForm.value) {
    alert("Form data is invalid.");
    return;
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(this.routeForm.value));

  console.log("Form Value:", this.routeForm.value);

  this.apiService.saveCreateRoots(formData).subscribe({
    next: (response: any) => {
      console.log("API Response:", response);

      if (response && response.status === 200) {

            this.routeForm.reset(response.data);
           alert("Data added Successfully.");
        

      } else {
        alert("Unable to save data.");
      }
    },
    error: (error) => {
      console.error("API Error:", error);
      alert("Unable to save data. Please try again.");
    }
  });
}

selectedStops: any[] = [];

checkBoxClick(stop: any) {

  if (stop.selected) {
    // Add only if not already added
    const exists = this.selectedStops.find(s => s.id === stop.id);
    if (!exists) {
      this.selectedStops.push(stop);
    }

  } else {
    // Remove unchecked stop
    this.selectedStops = this.selectedStops.filter(s => s.id !== stop.id);
  }

  console.log('Selected Stops:', this.selectedStops);
  console.log("routeForm value:", this.routeForm.value);

  


}


  editRoute() {
    this.isRouteCreated = false;
  }

  setStopOrder() {
    this.isSettingOrder = true;

    if(this.selectedStops.length !== 0) {
    this.stops = this.selectedStops;
    }
    else
    {
      this.apiService.getAllStops().subscribe(
      (response : any) => {
        this.stops = response.data;
          
      })
    }
  }

  manageStops() {
    this.isSettingOrder = false;

    
  }

  saveRoute() {

    console.log("this.selectedStops");
    console.log(this.selectedStops);
    console.log("this.selectedStops");

    console.log("this.routeForm.value");
    console.log(this.routeForm.value);
    
    console.log("this.routeForm.value");
    
    console.log('Route saved with stops:', this.stops.filter((s:any) => s.selected));
  
    this.routeForm.patchValue({ selectedstops: this.selectedStops });
    this.updateData();

  }

  onSearch(term: string) {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousIndex === event.currentIndex) return;
    const filtered = [...this.filteredStops()];
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const globalPrevIdx = startIndex + event.previousIndex;
    const globalCurIdx = startIndex + event.currentIndex;
    moveItemInArray(filtered, globalPrevIdx, globalCurIdx);
    const updatedFiltered = filtered.map((stop, index) => ({
      ...stop,
      order: index + 1
    }));
    const allStops = [...this.stops()];
    const updatedMap = new Map(updatedFiltered.map(s => [s.id, s]));
    if (this.searchTerm().trim() === '') {
      this.stops.set(updatedFiltered);
    } else {
      const result = allStops.map(s => {
        const updated = updatedMap.get(s.id);
        return updated ? updated : s;
      });
      this.stops.set(result);
    }
  }
}
