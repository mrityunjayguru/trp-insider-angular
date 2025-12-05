import { Component } from '@angular/core'
import { ProfileInfoComponent } from './components/profile-info/profile-info.component'
import { PersonalInfoComponent } from './components/personal-info/personal-info.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { MessagesComponent } from './components/messages/messages.component'
import { BreadcrumbComponent } from "@/app/layout/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports:[
    ProfileInfoComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    MessagesComponent,
    BreadcrumbComponent
],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
