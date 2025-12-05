import { ChangeDetectorRef, Component, inject } from '@angular/core'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { TopbarComponent } from '../topbar/topbar.component'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '../footer/footer.component'
import { Store } from '@ngrx/store'
import { changesidebarsize } from '@store/layout/layout-action'
import { getSidebarsize } from '@store/layout/layout-selector'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent {
  title!: string
  layoutType: any

  private cdr = inject(ChangeDetectorRef)

  private store = inject(Store)

  ngOnInit(): void {
    this.store.select('layout').subscribe((data) => {
      this.layoutType = data.LAYOUT
      document.documentElement.setAttribute('data-bs-theme', data.LAYOUT_THEME)

      document.documentElement.setAttribute(
        'data-sidebar-color',
        data.MENU_COLOR
      )
      document.documentElement.setAttribute(
        'data-topbar-color',
        data.TOPBAR_COLOR
      )
      document.documentElement.setAttribute('data-sidebar-size', data.MENU_SIZE)
    })
  }

  onActivate(componentReference: any) {
    this.title = componentReference.title
    this.cdr.detectChanges()
  }

  onToggleMobileMenu() {
    this.store.select(getSidebarsize).subscribe((size: any) => {
      document.documentElement.setAttribute('data-sidebar-size', size)
    })

    const size = document.documentElement.getAttribute('data-sidebar-size')

    document.documentElement.classList.toggle('sidebar-enable')
    if (size != 'hidden') {
      if (document.documentElement.classList.contains('sidebar-enable')) {
        this.store.dispatch(changesidebarsize({ size: 'condensed' }))
      } else {
        this.store.dispatch(changesidebarsize({ size: 'default' }))
      }
    }
  }
}
