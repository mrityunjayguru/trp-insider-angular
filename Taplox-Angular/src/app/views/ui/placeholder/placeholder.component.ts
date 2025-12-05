import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './placeholder.component.html',
  styles: ``,
})
export class PlaceholderComponent {}
