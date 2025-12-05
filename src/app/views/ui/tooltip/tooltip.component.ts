import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [BreadcrumbComponent, NgbTooltipModule],
  templateUrl: './tooltip.component.html',
  styles: ``,
})
export class TooltipComponent {}
