import { BreadcrumbComponent } from '@/app/layout/breadcrumb/breadcrumb.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'app-solar-icons',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './solar-icons.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolarIconsComponent {}
