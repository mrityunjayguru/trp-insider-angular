import { Route } from '@angular/router'
import { DatatableComponent } from './datatable/datatable.component'
import { BasicComponent } from './basic/basic.component'

export const TABLES_ROUTES: Route[] = [
  {
    path: 'basic',
    component: BasicComponent,
    data: { title: 'Basic Tables' },
  },
  {
    path: 'datatable',
    component: DatatableComponent,
    data: { title: 'DataTable' },
  },
]
