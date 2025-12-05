import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {}
