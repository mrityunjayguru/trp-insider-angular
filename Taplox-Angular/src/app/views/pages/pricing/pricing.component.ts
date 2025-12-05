
import { Component } from '@angular/core'
import { PricingPlans } from './data'
import { BreadcrumbComponent } from "@/app/layout/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  plans = PricingPlans
}
