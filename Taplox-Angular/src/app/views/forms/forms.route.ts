import { Route } from '@angular/router'
import { BasicComponent } from './basic/basic.component'
import { ValidationComponent } from './validation/validation.component'
import { FlatpickrComponent } from './flatpickr/flatpickr.component'
import { UploadComponent } from './upload/upload.component'
import { EditorComponent } from './editor/editor.component'

export const FORMS_ROUTES: Route[] = [
  {
    path: 'basic',
    component: BasicComponent,
    data: { title: 'Form Basic Element' },
  },

  {
    path: 'flatepicker',
    component: FlatpickrComponent,
    data: { title: 'Flatepicker' },
  },
  {
    path: 'validation',
    component: ValidationComponent,
    data: { title: 'Form Validation' },
  },

  {
    path: 'fileuploads',
    component: UploadComponent,
    data: { title: 'File Uploads' },
  },
  {
    path: 'editors',
    component: EditorComponent,
    data: { title: 'Editors' },
  },
]
