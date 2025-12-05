import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [BreadcrumbComponent, NgbProgressbarModule],
  templateUrl: './progress.component.html',
  styles: ``,
})
export class ProgressComponent {}
