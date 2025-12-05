import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../layout/breadcrumb/breadcrumb.component'
import { alert, type AlertType } from './data'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [BreadcrumbComponent, NgbAlertModule],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class AlertComponent {
  alertData: AlertType[] = alert

  close(index: number) {
    this.alertData.splice(index, 1)
  }

  showLive() {
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      window.alert('Nice, you triggered this alert message!')
    }
  }
}
