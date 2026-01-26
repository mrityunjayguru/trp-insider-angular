import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { LogService } from '../log.service';

@Component({
  selector: 'app-merchantuserdetails',
  templateUrl: './merchantuserdetails.component.html',
  styleUrls: ['./merchantuserdetails.component.css']
})
export class MerchantuserdetailsComponent  {
  apiService: any;
  imgConfigService: any;
  formdata:any;
  productData:any;
  imgConfig: any;
  router:any;
  route:any;
  currentDate: any;
  otheruserdata:any;
  headerFooterService
  dtOptions: any;
  datatable : any;
  dtRendered :any;
  userlength:any;
  logService :any;

  constructor(logService : LogService, headerFooterService :HeaderfooterService,apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    this.logService = logService;
    this.headerFooterService = headerFooterService;
    
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.userlength =0;
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.dtRendered = false;

    this.route.queryParams
    .subscribe((params:any) => {




    this.apiService.getusers().subscribe(
      (response:any) => {
            this.productData = response.data;
            this.logService.clog(this.productData, false)
           this.userlength =  this.productData.length 
           this.dtRendered = true;
           
      })

    

  }
)}
ngOnInit() {


  
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 20,
    processing: true,
    dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf'
      ]
  };
}
}
