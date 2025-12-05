import { Component } from '@angular/core'
import { StatComponent } from './component/stat/stat.component'
import { TopPagesComponent } from './component/top-pages/top-pages.component'
import { SessionComponent } from './component/session/session.component'
import { RecentOrderComponent } from './component/recent-order/recent-order.component'
import { UserComponent } from './component/user/user.component'
import { BreadcrumbComponent } from '@/app/layout/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    StatComponent,
    TopPagesComponent,
    SessionComponent,
    RecentOrderComponent,
    UserComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {}
