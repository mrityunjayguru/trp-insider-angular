import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changesidebarsize } from '@store/layout/layout-action';
import { DashboardComponent } from '@views/dashboard/dashboard.component';

@Component({
  selector: 'app-hidden-sidebar',
  imports: [DashboardComponent],
  templateUrl: './hidden-sidebar.component.html',
  styles: ``
})
export class HiddenSidebarComponent {
  private store = inject(Store)
  ngOnInit(): void {
    this.store.dispatch(changesidebarsize({ size:'hidden' }))
  }
}
