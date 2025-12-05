import type { Route } from "@angular/router";
import { DarkThemeComponent } from "./dark-theme/dark-theme.component";
import { DarksidebarComponent } from "./darksidebar/darksidebar.component";
import { DarktopbarComponent } from "./darktopbar/darktopbar.component";
import { SmallsidebarComponent } from "./smallsidebar/smallsidebar.component";
import { HiddenSidebarComponent } from "./hidden-sidebar/hidden-sidebar.component";

export const LAYOUT_ROUTES: Route[] = [
 
  {
    path: 'dark-mode',
    component: DarkThemeComponent,
    data: { title: 'Dark Theme' }
  },
  {
    path: 'dark-sidenav',
    component: DarksidebarComponent,
    data: { title: 'Dark Theme' }
  },
  {
    path: 'dark-topnav',
    component: DarktopbarComponent,
    data: { title: 'Dark Theme' }
  },
  {
    path: 'small-sidenav',
    component: SmallsidebarComponent,
    data: { title: 'Dark Theme' }
  },
  {
    path: 'hidden-sidenav',
    component: HiddenSidebarComponent,
    data: { title: 'Dark Theme' }
  },
]
