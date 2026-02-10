import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ZardIconComponent } from "@/shared/components/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, ZardIconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  companyOpen = false;
  employeeOpen = false;

  constructor(private router: Router) { }

  toggleCompany() {
    this.companyOpen = !this.companyOpen;
  }

  toggleEmployee() {
    this.employeeOpen = !this.employeeOpen;
  }

  isCompanyRouteActive(): boolean {
    return this.router.url.includes('/company/business-setting') ||
      this.router.url.includes('/company/transport-gps') ||
      this.router.url.includes('/company/kyb');
  }

  isEmployeeRouteActive(): boolean {
    return this.router.url.includes('/company/manage-employee') ||
      this.router.url.includes('/company/employee-details')
  }
}
