import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import {
  NgbDropdownModule,
  NgbScrollSpyModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [BreadcrumbComponent, NgbScrollSpyModule, NgbDropdownModule],
  templateUrl: './scrollspy.component.html',
  styles: `
    .scrollspy-example {
      position: relative;
      height: 200px;
      margin-top: 0.5rem;
      overflow: auto;
    }
  `,
})
export class ScrollspyComponent {}
