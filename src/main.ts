/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
.then((ref) => {
  // Ensure Angular destroys itself on hot reloads.
  
})
.catch(err => console.error(err));
