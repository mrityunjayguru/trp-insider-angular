import { Component } from '@angular/core';
import { HeaderfooterService } from "../headerfooter.service";


@Component({
  selector: 'app-vendorfooter',
  templateUrl: './vendorfooter.component.html',
  styleUrls: ['./vendorfooter.component.css']
})
export class VendorfooterComponent {
  mainfoot: any;
             
  constructor(){
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 


    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none'; 
                // this.headerFooterService = headerFooterService;
                // this.headerFooterService.enableFooter();
              }
}
