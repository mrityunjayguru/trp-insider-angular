/*import { Component, computed, signal } from '@angular/core';
import { PaginationComponent } from "@/shared/components/pagination";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import {  NgIf } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';


import {  OnInit } from '@angular/core';

import { ApiService } from '../../apiservice';
import { Router } from '@angular/router';

interface EmployeeItem {
  id: number;
  name: string;
  empId: string;
  mobile: string;
  empType: string;
  department: string;
  designation: string;
  isActive: boolean;
}

@Component({
  selector: 'app-manage-employee',
  imports: [CommonModule, FormsModule, PaginationComponent, RouterLink,ReactiveFormsModule],
  templateUrl: './manage-employee.html',
  styleUrl: './manage-employee.css',
})
export class ManageEmployee {
  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = 10;
  apiService:any;

  employees :any;

  

  filteredEmployees = computed(() => {
    
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.employees;

    return this.employees.filter((employee:any) =>
      employee.name.toLowerCase().includes(query) ||
      employee.id.toLowerCase().includes(query) ||
      employee.contactnumber.toLowerCase().includes(query) ||
      employee.departmentname.toLowerCase().includes(query) ||
      employee.designation.toLowerCase().includes(query)
    );
  });


constructor(private apiServicep:ApiService,private router: Router)
{
  this.apiService = apiServicep;
  const page = { page: 0, size: 100 };

  this.apiService.getAllEmployee(page).subscribe(
      (response : any) => {               
        this.employees = response.data.content;
        console.log("employees Details");
        console.log(this.employees);
        console.log("employees Details");
          
      })

}

  paginatedEmployees = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredEmployees().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredEmployees().length / this.itemsPerPage));

  onSearch() {
    this.currentPage.set(1);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  toggleStatus(employee: EmployeeItem) {
    this.employees.update((items:any) =>
      items.map((item:any) => item.id === employee.id ? { ...item, isActive: !item.isActive } : item)
    );
  }

  editRoute(employee: EmployeeItem) {
    console.log('Edit employee:', employee);
  }

  viewRoute(employee: EmployeeItem) {
    console.log('View employee:', employee);
  }
}*/

import { Component, computed, signal } from '@angular/core';
import { PaginationComponent } from "@/shared/components/pagination";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import { ApiService } from '../../apiservice';
import { ZardAlertDialogService } from '../../shared/components/alert-dialog/alert-dialog.service';




interface EmployeeItem {
  id: number;
  name: string;
  empId: string;
  contactnumber: string;
  typeofemployment: string;
  department: string;
  designation: string;
  deleted: boolean;
}


@Component({
  selector: 'app-manage-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PaginationComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './manage-employee.html',
  styleUrl: './manage-employee.css',
})
export class ManageEmployee {

  submitted = false;
  isSuccess = false;
  isError = false;
  message = '';

  
  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = 10;

  // ✅ MAKE THIS A SIGNAL
  employees = signal<EmployeeItem[]>([]);

  constructor(private apiService: ApiService, private router: Router, private alertDialogService: ZardAlertDialogService) {
    const page = { page: 0, size: 100 };

    this.apiService.getAllEmployee(page).subscribe(
      (response: any) => {
        this.employees.set(response.data.content || []);
        console.log(" this.employees");
        console.log(this.employees());
        console.log(" this.employees");
      
      }
    );
  }

  // ✅ FILTERED SIGNAL
  filteredEmployees = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.employees();

    if (!query) return list;

    return list.filter(employee =>
      employee.name?.toLowerCase().includes(query) ||
      employee.id?.toString().includes(query) ||
      employee.contactnumber?.toLowerCase().includes(query) ||
      employee.department?.toLowerCase().includes(query) ||
      employee.designation?.toLowerCase().includes(query)
    );
  });

  // ✅ PAGINATION
  paginatedEmployees = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredEmployees().slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredEmployees().length / this.itemsPerPage)
  );

  onSearch() {
    this.currentPage.set(1);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  toggleStatus(dept: any) {
    const dialogRef = this.alertDialogService.confirm({
      zTitle: 'Confirm Status Change',
      zContent: 'Are you sure you want to change the status of this department?',
      zOkText: 'Confirm',
      zCancelText: 'Cancel',
      zOnOk: () => {
        dept.deleted = !dept.deleted;
        const formData = new FormData();
        formData.append('id', dept.id);
        formData.append('deleted', dept.deleted);
        this.apiService.updateEmployeeDeleted(formData).subscribe(
          (response: any) => {
            this.isSuccess = true;
            this.message = response.mesage || "Status updated successfully.";
            
          },
          (error) => {
            this.isError = true;
            this.message = "An error occurred while updating status.";
          }
        );
      }
    });
  }

  editRoute(employee: EmployeeItem) {
    this.router.navigate(['/employees/edit', employee.id]);
  }

  viewRoute(employee: EmployeeItem) {
    this.router.navigate(['/employees/view', employee.id]);
  }
}


