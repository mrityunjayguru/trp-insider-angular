
import { Component, inject, type OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changetheme } from '@store/layout/layout-action';
import { DashboardComponent } from '@views/dashboard/dashboard.component';

@Component({
  selector: 'dark-theme',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './dark-theme.component.html',
  styles: ``
})
export class DarkThemeComponent implements OnInit {
  private store = inject(Store)
  ngOnInit(): void {
    this.store.dispatch(changetheme({ color:'dark' }))
  }
}

