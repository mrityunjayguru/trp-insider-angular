import { CommonModule } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { stat } from '@views/dashboard/data'

@Component({
  selector: 'dashboard-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatComponent {
  stat = stat
}
