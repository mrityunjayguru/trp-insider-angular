import { Component, inject } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { ToastService } from '@core/service/toast-service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastsContainer } from './toasts-container.component'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    ToastsContainer,
    FormsModule,
    NgbToastModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './toast.component.html',
  styles: ``,
})
export class ToastComponent {
  liveToast = false
  show = true
  show1 = true
  show2 = true
  show3 = true
  placement = true
  translucent = true
  toastPlacement: string = ''
  toastService = inject(ToastService)

  showStandard() {
    this.toastService.show({
      content: 'See? Just like this.',
      delay: 10000,
      classname: 'standard',
    })
  }

  showStandard2() {
    this.toastService.show({
      content: 'Heads up, toasts will stack automatically',
      delay: 10000,
      classname: 'standard',
    })
  }

  close() {
    this.show = false
  }
}
