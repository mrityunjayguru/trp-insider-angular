import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-company-layout',
  standalone: true,
  imports: [RouterModule, Sidebar],
  templateUrl: './company-layout.html',
})
export class CompanyLayout {
  mobileMenuOpen: boolean = false;
}
