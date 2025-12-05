import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styles: ``,
})
export class BreadcrumbComponent {
  @Input() title: string = ''
  @Input() subTitle: string = ''
}
