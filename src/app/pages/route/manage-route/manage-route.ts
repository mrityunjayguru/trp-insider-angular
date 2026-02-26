import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { ApiService } from '@/apiservice';
import {  Router,RouterLink } from "@angular/router";



interface RouteItem {
  id: number;
  routename: string;
  totalStops: number;
  officelocation: string;
  modeoftransport: string;
  selectedstops: [[]];
  isActive: boolean;
}

@Component({
  selector: 'app-manage-route',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PaginationComponent],
  templateUrl: './manage-route.html',
  styleUrl: './manage-route.css',
})
export class ManageRoute {

  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = 10;

  // ✅ Make routes a signal
  routes = signal<RouteItem[]>([]);

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getAllCreateRoots().subscribe((response: any) => {
      this.routes.set(response.data || []);
      console.log("Routes fetched successfully:", this.routes());
    });
  }

  filteredRoutes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const routes = this.routes();

    if (!query) return routes;

    return routes.filter(route =>
      route.routename?.toLowerCase().includes(query) ||
      route.officelocation?.toLowerCase().includes(query) ||
      route.modeoftransport?.toLowerCase().includes(query)
    );
  });

  paginatedRoutes = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredRoutes().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredRoutes().length / this.itemsPerPage)
  );

  onSearch() {
    this.currentPage.set(1);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  toggleStatus(route: RouteItem) {
    this.routes.update(items =>
      items.map(item =>
        item.id === route.id
          ? { ...item, isActive: !item.isActive }
          : item
      )
    );
  }

  editRoute(route: RouteItem) {
    console.log('Edit route:', route);
  }

  viewRoute(route: RouteItem) {
    this.router.navigate(['/company/viewroute'], {
        state: { routeData: route }
    });
    
  }
}