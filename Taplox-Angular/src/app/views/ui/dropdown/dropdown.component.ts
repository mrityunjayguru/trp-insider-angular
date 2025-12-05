import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [BreadcrumbComponent, NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styles: ``,
})
export class DropdownComponent {}
