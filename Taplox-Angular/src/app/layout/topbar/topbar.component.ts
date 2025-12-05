import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Output,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { logout } from '@store/authentication/authentication.actions'
import { changetheme } from '@store/layout/layout-action'
import { getLayoutColor } from '@store/layout/layout-selector'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [SimplebarAngularModule, NgbDropdownModule, RouterLink],
  templateUrl: './topbar.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopbarComponent {
  @Output() mobileMenuButtonClicked = new EventEmitter()
  store = inject(Store)

  toggleMobileMenu() {
    this.mobileMenuButtonClicked.emit()
  }
  changeTheme() {
    const color = document.documentElement.getAttribute('data-bs-theme')
    if (color == 'light') {
      this.store.dispatch(changetheme({ color: 'dark' }))
    } else {
      this.store.dispatch(changetheme({ color: 'light' }))
    }
    this.store.select(getLayoutColor).subscribe((color) => {
      document.documentElement.setAttribute('data-bs-theme', color)
    })
  }
  logout() {
    this.store.dispatch(logout())
  }
}
