import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import {
  NgbCarouselModule,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [BreadcrumbComponent, NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styles: ``,
})
export class CarouselComponent {
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true
    config.showNavigationIndicators = true
  }
}
