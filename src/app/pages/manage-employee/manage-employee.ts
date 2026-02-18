import { Component, computed, signal } from '@angular/core';
import { PaginationComponent } from "@/shared/components/pagination";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

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
  imports: [CommonModule, FormsModule, PaginationComponent, RouterLink],
  templateUrl: './manage-employee.html',
  styleUrl: './manage-employee.css',
})
export class ManageEmployee {
  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = 10;

  employees = signal<EmployeeItem[]>([
    { id: 1, name: 'Tori Reid', empId: 'DD0001', mobile: '9876543211', empType: 'Regular', department: 'Design', designation: 'UI/UX Expert', isActive: true },
    { id: 2, name: 'Renee Horne', empId: 'DD0002', mobile: '9876543212', empType: 'Target Based', department: 'Development', designation: 'Full Stack', isActive: true },
    { id: 3, name: 'Camryn Neal', empId: 'DD0003', mobile: '9876543213', empType: 'Commission Based', department: 'HR', designation: 'HR', isActive: false },
    { id: 4, name: 'Lyric Peck', empId: 'DD0004', mobile: '9876543214', empType: 'Target Based', department: 'Management', designation: 'Accounts', isActive: true },
  ]);

  filteredEmployees = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.employees();

    return this.employees().filter(employee =>
      employee.name.toLowerCase().includes(query) ||
      employee.empId.toLowerCase().includes(query) ||
      employee.mobile.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query) ||
      employee.designation.toLowerCase().includes(query)
    );
  });

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
    this.employees.update(items =>
      items.map(item => item.id === employee.id ? { ...item, isActive: !item.isActive } : item)
    );
  }

  editRoute(employee: EmployeeItem) {
    console.log('Edit employee:', employee);
  }

  viewRoute(employee: EmployeeItem) {
    console.log('View employee:', employee);
  }
}

