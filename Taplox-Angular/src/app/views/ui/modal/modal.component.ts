import { Component, inject, TemplateRef } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import {
  NgbModal,
  NgbModalModule,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BreadcrumbComponent, NgbModalModule],
  templateUrl: './modal.component.html',
  styles: ``,
  providers: [NgbModal],
})
export class ModalComponent {
  private modalService = inject(NgbModal)

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  staticBackdrop(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
    this.modalService.open(content, options)
  }
}
