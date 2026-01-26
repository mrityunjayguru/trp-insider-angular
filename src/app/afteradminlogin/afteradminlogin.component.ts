import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import {HeaderfooterService} from '../headerfooter.service' ;


@Component({
  selector: 'app-afteradminlogin',
  templateUrl: './afteradminlogin.component.html',
  styleUrls: ['./afteradminlogin.component.css']
})
export class AfteradminloginComponent  {
  mainhead:any
  mainfoot:any;
  headerFooterService :any;
  
  constructor(headerFooterService :HeaderfooterService){

    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();
  }
    
}
