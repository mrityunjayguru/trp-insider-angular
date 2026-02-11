import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

interface RouteItem {
  id: number;
  name: string;
  totalStops: number;
  officeLocation: string;
  transport: string;
  isActive: boolean;
}

@Component({
  selector: 'app-manage-route',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './manage-route.html',
  styleUrl: './manage-route.css',
})
export class ManageRoute {
  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = 10;

  routes = signal<RouteItem[]>([
    { id: 1, name: 'Bank Route Rewari', totalStops: 12, officeLocation: 'Model Town', transport: 'Truck', isActive: true },
    { id: 2, name: 'Mandir Route Rewari', totalStops: 18, officeLocation: 'Sector 3', transport: 'EAuto', isActive: true },
    { id: 3, name: 'Liquor Stores', totalStops: 49, officeLocation: 'Brass Market', transport: 'PickUp', isActive: false },
    { id: 4, name: 'Bakery Rewari', totalStops: 167, officeLocation: 'CR Complex', transport: 'Tempo', isActive: true },
    { id: 5, name: 'Main City Route', totalStops: 25, officeLocation: 'Main Square', transport: 'Van', isActive: true },
    { id: 6, name: 'Industrial Area', totalStops: 30, officeLocation: 'Sector 10', transport: 'Truck', isActive: true },
    { id: 7, name: 'Railway Station', totalStops: 15, officeLocation: 'Station Road', transport: 'EAuto', isActive: false },
    { id: 8, name: 'Expressway Route', totalStops: 50, officeLocation: 'Highway Point', transport: 'Tempo', isActive: true },
  ]);

  filteredRoutes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.routes();

    return this.routes().filter(route =>
      route.name.toLowerCase().includes(query) ||
      route.officeLocation.toLowerCase().includes(query) ||
      route.transport.toLowerCase().includes(query)
    );
  });

  paginatedRoutes = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredRoutes().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredRoutes().length / this.itemsPerPage));

  onSearch() {
    this.currentPage.set(1);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  toggleStatus(route: RouteItem) {
    this.routes.update(items =>
      items.map(item => item.id === route.id ? { ...item, isActive: !item.isActive } : item)
    );
  }

  editRoute(route: RouteItem) {
    console.log('Edit route:', route);
  }

  viewRoute(route: RouteItem) {
    console.log('View route:', route);
  }
}
