import { Route } from '@angular/router'
import { ErrorComponent } from './error/error.component'
import { ErrorAltComponent } from './error-alt/error-alt.component'

export const ERROR_PAGE_ROUTES: Route[] = [
  {
    path: '404-alt',
    component: ErrorAltComponent,
    data: { title: 'Page Not Found - 404' },
  },
]
