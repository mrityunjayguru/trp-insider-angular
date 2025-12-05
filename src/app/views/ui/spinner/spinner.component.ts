import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './spinner.component.html',
  styles: ``,
})
export class SpinnerComponent {}
