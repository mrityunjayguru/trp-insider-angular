import { Route } from '@angular/router'
import { BoxIconsComponent } from './box-icons/box-icons.component'
import { SolarIconsComponent } from './solar-icons/solar-icons.component'

export const ICONS_ROUTES: Route[] = [
  {
    path: 'boxicons',
    component: BoxIconsComponent,
    data: { title: 'Boxicons' },
  },
  {
    path: 'solar',
    component: SolarIconsComponent,
    data: { title: 'Solar Icons' },
  },
]
