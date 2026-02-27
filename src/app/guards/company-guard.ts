import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {Cidservice} from "../cidservice"

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {

  constructor(
    private companyIdService: Cidservice,
    private router: Router
  ) {}

  canActivate(): boolean {

    const companyId = this.companyIdService.getCompanyId();

    if (!companyId) {
      this.router.navigate(['/register']); // redirect page
      return false;
    }

    return true;
  }
}