import { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ApexChartsComponent } from './apex-charts/apex-charts.component'

export const VIEW_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: 'ui',
    loadChildren: () => import('./ui/ui.route').then((mod) => mod.UI_ROUTES),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.route').then((mod) => mod.FORMS_ROUTES),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./table/tables.route').then((mod) => mod.TABLES_ROUTES),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./maps/maps.route').then((mod) => mod.MAPS_ROUTES),
  },

  {
    path: 'pages',
    loadChildren: () =>
      import('./errors/error.route').then((mod) => mod.ERROR_PAGE_ROUTES),
  },
  {
    path: 'index',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'charts',
    component: ApexChartsComponent,
    data: { title: 'Apex Chart' },
  },
]
