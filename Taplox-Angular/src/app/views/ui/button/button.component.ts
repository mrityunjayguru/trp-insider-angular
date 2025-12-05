import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [BreadcrumbComponent, NgbDropdownModule],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {}
