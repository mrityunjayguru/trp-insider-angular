import { Component } from '@angular/core';
import {HeaderfooterService} from '../headerfooter.service' 

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent {
  headerFooterService: any;


  constructor(headerFooterService :HeaderfooterService){


    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
  }
}
