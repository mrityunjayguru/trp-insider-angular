import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './popover.component.html',
  styles: ``,
})
export class PopoverComponent {}
