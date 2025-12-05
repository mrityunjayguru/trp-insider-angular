import { BreadcrumbComponent } from '@/app/layout/breadcrumb/breadcrumb.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './basic.component.html',
  styles: ``,
})
export class BasicComponent {}
