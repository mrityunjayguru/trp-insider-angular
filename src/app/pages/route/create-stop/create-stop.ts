import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '@/shared/components/pagination';


interface Stop {
  id: number;
  stopName: string;
  address: string;
  department: string;
  isActive: boolean;
}

@Component({
  selector: 'app-create-stop',
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './create-stop.html',
  styleUrl: './create-stop.css',
})
export class CreateStop implements OnInit {
  stops: Stop[] = [
    { id: 1, stopName: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', isActive: true },
    { id: 2, stopName: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', isActive: true },
    { id: 3, stopName: 'Lao', address: 'Rewari, Haryana 123401', department: 'Collection', isActive: false },
    { id: 4, stopName: 'Ankoran', address: 'Rewari, Haryana 123401', department: 'Delivery', isActive: true },
    { id: 5, stopName: 'Central Park', address: 'Delhi, Delhi 110001', department: 'Procurement', isActive: true },
    { id: 6, stopName: 'Tech Hub', address: 'Bangalore, Karnataka 560001', department: 'IT', isActive: true },
    { id: 7, stopName: 'Finance Center', address: 'Mumbai, Maharashtra 400001', department: 'Finance', isActive: false },
    { id: 8, stopName: 'Warehouse A', address: 'Pune, Maharashtra 411001', department: 'Logistics', isActive: true },
    { id: 9, stopName: 'Office Complex', address: 'Gurgaon, Haryana 122001', department: 'HR', isActive: true },
    { id: 10, stopName: 'Distribution Hub', address: 'Chennai, Tamil Nadu 600001', department: 'Delivery', isActive: false },
  ];

  filteredStops: Stop[] = [];
  paginatedStops: Stop[] = [];
  searchQuery: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  ngOnInit() {
    this.filteredStops = [...this.stops];
    this.updatePagination();
  }

  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.filteredStops = [...this.stops];
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredStops = this.stops.filter(stop =>
        stop.stopName.toLowerCase().includes(query) ||
        stop.address.toLowerCase().includes(query) ||
        stop.department.toLowerCase().includes(query)
      );
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  toggleStatus(stop: Stop) {
    stop.isActive = !stop.isActive;
    console.log(`${stop.stopName} is now ${stop.isActive ? 'Active' : 'Inactive'}`);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredStops.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedStops = this.filteredStops.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  editStop(stop: Stop) {
    console.log('Editing stop:', stop);
    // Add your edit logic here
  }
}
