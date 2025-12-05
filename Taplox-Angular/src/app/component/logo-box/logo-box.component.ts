import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="logo-box">
      <a routerLink="/" class="logo-dark">
        <img src="assets/images/logo-sm.png" class="logo-sm" alt="logo sm" />
        <img
          src="assets/images/logo-dark.png"
          class="logo-lg"
          alt="logo dark"
        />
      </a>

      <a routerLink="/" class="logo-light">
        <img src="assets/images/logo-sm.png" class="logo-sm" alt="logo sm" />
        <img
          src="assets/images/logo-light.png"
          class="logo-lg"
          alt="logo light"
        />
      </a>
    </div>
  `,
  styles: ``,
})
export class LogoBoxComponent {}
