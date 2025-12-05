import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [BreadcrumbComponent, NgbAccordionModule],
  templateUrl: './accordion.component.html',
  styles: ``,
})
export class AccordionComponent {}
