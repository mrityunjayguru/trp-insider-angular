import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import { DecimalPipe } from '@angular/common'

import { provideRouter } from '@angular/router'
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideStore } from '@ngrx/store'
import { routes } from './app.routes'
import { provideEffects } from '@ngrx/effects'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { AuthenticationEffects } from '@store/authentication/authentication.effects'
import { BrowserModule } from '@angular/platform-browser'
import { rootReducer } from './store'
import { localStorageSyncReducer } from '@store/layout/layout-reducers'
import { FakeBackendProvider } from './helper/fake-backend'
export const appConfig: ApplicationConfig = {
  providers: [
    DecimalPipe,
    FakeBackendProvider,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideEffects(AuthenticationEffects),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore(rootReducer, { metaReducers: [localStorageSyncReducer] }),
  ],
}
