import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [BreadcrumbComponent, NgbNavModule],
  templateUrl: './tab.component.html',
  styles: ``,
})
export class TabComponent {}
