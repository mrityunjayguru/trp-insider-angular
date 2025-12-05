import { Router, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout/layout.component'
import { inject } from '@angular/core'
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component'
import { ErrorComponent } from '@views/errors/error/error.component'
import { AuthenticationService } from '@core/service/auth.service'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const currentUser = inject(AuthenticationService)
        if (!currentUser.session) {
          return router.createUrlTree(['/auth/signin'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      },
    ],
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'pages/404',
    component: ErrorComponent,
    data: { title: '404' },

  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/layout-pages/layout.route').then((mod) => mod.LAYOUT_ROUTES),
  },
]
