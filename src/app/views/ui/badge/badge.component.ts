import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './badge.component.html',
  styles: ``,
})
export class BadgeComponent {}
