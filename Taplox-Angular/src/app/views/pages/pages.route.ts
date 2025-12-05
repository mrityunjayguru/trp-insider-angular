import { Route } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FaqsComponent } from "./faqs/faqs.component";


export const PAGES_ROUTES: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' },
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: { title: 'Pricing' },
  },
   {
    path: 'help',
    component: FaqsComponent,
    data: { title: 'Help' },
  },
]