import { FileUploaderComponent } from '@/app/component/file-uploader/file-uploader.component'
import { BreadcrumbComponent } from '@/app/layout/breadcrumb/breadcrumb.component'
import { Component } from '@angular/core'

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [BreadcrumbComponent, FileUploaderComponent],
  templateUrl: './upload.component.html',
  styles: ``,
})
export class UploadComponent {}
