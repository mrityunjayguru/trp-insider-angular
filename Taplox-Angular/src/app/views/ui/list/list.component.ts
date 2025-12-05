import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {}
