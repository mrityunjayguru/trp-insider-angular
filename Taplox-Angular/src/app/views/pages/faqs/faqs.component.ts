import { Component } from '@angular/core'
import { FaqData } from './data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { BreadcrumbComponent } from "@/app/layout/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgbAccordionModule, BreadcrumbComponent],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  faqList = FaqData
}
