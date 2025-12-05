import { BreadcrumbComponent } from '@/app/layout/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'
import { FlatpickrDirective } from '@core/directive/flatpickr.directive'

@Component({
  selector: 'app-flatpickr',
  standalone: true,
  imports: [BreadcrumbComponent, FlatpickrDirective],
  templateUrl: './flatpickr.component.html',
  styles: ``,
})
export class FlatpickrComponent {}
