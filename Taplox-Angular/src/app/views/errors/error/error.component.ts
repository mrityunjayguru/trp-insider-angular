import { Component, inject, Renderer2 } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styles: ``,
})
export class ErrorComponent {
  renderer = inject(Renderer2)

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'authentication-bg')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'authentication-bg')
  }
}
