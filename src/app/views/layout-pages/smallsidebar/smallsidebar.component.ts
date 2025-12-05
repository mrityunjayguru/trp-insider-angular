import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changesidebarsize } from '@store/layout/layout-action';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { DarksidebarComponent } from "../darksidebar/darksidebar.component";

@Component({
  selector: 'app-smallsidebar',
  imports: [DashboardComponent],
  templateUrl: './smallsidebar.component.html',
  styles: ``
})
export class SmallsidebarComponent {
  private store = inject(Store)
  ngOnInit(): void {
    this.store.dispatch(changesidebarsize({ size:'condensed' }))
  }
}
