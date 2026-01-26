import { Component } from '@angular/core';
import {HeaderfooterService} from '../headerfooter.service' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  mainhead:any
  mainfoot:any;
  headerFooterService :any;
  constructor(headerFooterService :HeaderfooterService){
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();

   
  
    
  }
}
