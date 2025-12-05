import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changemenucolor, changesidebarsize } from '@store/layout/layout-action';
import { DashboardComponent } from '@views/dashboard/dashboard.component';

@Component({
  selector: 'app-darksidebar',
  imports: [DashboardComponent],
  templateUrl: './darksidebar.component.html',
  styles: ``
})
export class DarksidebarComponent {
 private store = inject(Store)
  ngOnInit(): void {
    this.store.dispatch(changemenucolor({menu :'dark' }))
  }
}
