import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changetopbarcolor } from '@store/layout/layout-action';
import { DashboardComponent } from "../../dashboard/dashboard.component";

@Component({
  selector: 'app-darktopbar',
  imports: [DashboardComponent],
  templateUrl: './darktopbar.component.html',
  styles: ``
})
export class DarktopbarComponent {
  private store = inject(Store)
  ngOnInit(): void {
    this.store.dispatch(changetopbarcolor({ topbar:'dark' }))
  }
}
