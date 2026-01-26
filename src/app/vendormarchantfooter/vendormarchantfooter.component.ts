import { Component } from '@angular/core';
import { HeaderfooterService } from '../headerfooter.service';

@Component({
  selector: 'app-vendormarchantfooter',
  templateUrl: './vendormarchantfooter.component.html',
  styleUrls: ['./vendormarchantfooter.component.css']
})
export class VendormarchantfooterComponent {
  mainfoot: any;
  constructor() {
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';


    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none';
    // this.headerFooterService = headerFooterService;
    // this.headerFooterService.enableFooter();
  }
}
