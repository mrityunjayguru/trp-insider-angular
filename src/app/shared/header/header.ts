


import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ZardIconComponent } from '../components/icon/icon.component';
import { ZardPopoverComponent, ZardPopoverDirective } from '../components/popover/popover.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ZardPopoverDirective, ZardPopoverComponent, ZardIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly isLoggedIn = signal(true);

  readonly user = {
    name: 'Summer Sullivan',
    companyId: 'COMPANY-123',
    kybStatus: 'Verified',
  };

  logout() {
    this.isLoggedIn.set(false);
  }
}

