import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { computed, signal } from '@angular/core';
import { PaginationComponent } from "@/shared/components/pagination";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import { ApiService } from '../../apiservice';
import { ZardAlertDialogService } from '../../shared/components/alert-dialog/alert-dialog.service';


@Component({
  selector: 'app-employeelist',
  imports: [
    CommonModule,
    FormsModule,
    PaginationComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './employeelist.html',
  styleUrl: './employeelist.css',
})
export class Employeelist implements OnInit {
  employeeId!: number;
  employee:any;

  constructor(private route: ActivatedRoute,private apiService: ApiService, private cdr : ChangeDetectorRef) {

    
   
  }

  ngOnInit(): void {
    // Listen for route param changes
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          alert("ID "+id);
          this.employeeId = id;
          return this.apiService.getemployeebyid(id); // call API for new id
        })
      )
      .subscribe({
        next: (res: any) => {
          this.employee = res.data;
          console.log("Employee loaded:", this.employee);
          this.cdr.markForCheck(); // ensures Angular updates template
        },
        error: (err) => console.error(err)
      });
  }

}




