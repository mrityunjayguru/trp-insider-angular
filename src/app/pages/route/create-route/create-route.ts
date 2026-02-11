import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { CreateStop } from '../create-stop/create-stop';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-route',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PaginationComponent, DragDropModule],
  templateUrl: './create-route.html',
  styleUrl: './create-route.css',
})
export class CreateRoute {
  private fb = inject(FormBuilder);

  isRouteCreated = false;
  routeForm: FormGroup = this.fb.group({
    routeName: ['', Validators.required],
    office: ['', Validators.required],
    modeOfTransport: ['', Validators.required]
  });

  routeData: any = null;
  isSettingOrder = false;

  searchTerm = signal('');
  currentPage = signal(1);
  itemsPerPage = 20;

  stops = signal([
    { id: 1, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 1 },
    { id: 2, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 2 },
    { id: 3, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 3 },
    { id: 4, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 4 },
    { id: 5, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 5 },
    { id: 6, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 6 },
    { id: 7, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 7 },
    { id: 8, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 8 },
    { id: 9, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 9 },
    { id: 10, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 10 },
    { id: 11, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 11 },
    { id: 12, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 12 },
    { id: 13, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 13 },
    { id: 14, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 14 },
    { id: 15, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 15 },
    { id: 16, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 16 },
    { id: 17, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 17 },
    { id: 18, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 18 },
    { id: 19, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 19 },
    { id: 20, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 20 },
    { id: 21, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 21 },
    { id: 22, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 22 },
    { id: 23, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 23 },
    { id: 24, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 24 },
    { id: 25, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 25 },
    { id: 26, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 26 },
    { id: 27, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 27 },
    { id: 28, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 28 },
    { id: 29, name: 'Market, Sector 3', address: 'Rewari, Haryana 123401', department: 'Procurement', selected: false, order: 29 },
    { id: 30, name: 'Mandir', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 30 },
    { id: 31, name: 'Lab', address: 'Rewari, Haryana 123401', department: 'Collection', selected: false, order: 31 },
    { id: 32, name: 'Ankorah', address: 'Rewari, Haryana 123401', department: 'Delivery', selected: false, order: 32 },
  ]);

  filteredStops = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.stops().filter(stop =>
      stop.name.toLowerCase().includes(term) ||
      stop.address.toLowerCase().includes(term) ||
      stop.department.toLowerCase().includes(term)
    );
  });

  paginatedStops = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredStops().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredStops().length / this.itemsPerPage));

  onSubmit() {
    if (this.routeForm.valid) {
      this.routeData = this.routeForm.value;
      this.isRouteCreated = true;
      console.log('Route submitted:', this.routeData);
    }
  }

  editRoute() {
    this.isRouteCreated = false;
  }

  setStopOrder() {
    this.isSettingOrder = true;
  }

  manageStops() {
    this.isSettingOrder = false;
  }

  saveRoute() {
    console.log('Route saved with stops:', this.stops().filter(s => s.selected));
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
