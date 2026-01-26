import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-merchantheader',
  templateUrl: './merchantheader.component.html',
  styleUrls: ['./merchantheader.component.css']
})
export class MerchantheaderComponent {
  apiService: any;
  imgConfigService: any;
  formdata:any;
  productData:any;
  imgConfig: any;
  router:any;
  route:any;
  currentDate: any;
  otheruserdata:any;
  headerFooterService:any;
  dtOptions: any;
  datatable : any;
  dtRendered :any;
  userlength:any;
  notificationMessages:any;
  pendingForApprovgal:any;
  showItems: any;
  showNotification: any;
  constructor(headerFooterService :HeaderfooterService,apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    this.pendingForApprovgal=0;
    this.notificationMessages=["dd"];
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
  this.apiService.getAllProductsForApprovalPending().subscribe(
    (response:any) => {

          this.notificationMessages = response.data;
          this.pendingForApprovgal= response.data.length;
         
         
          
    })


}

toggleItems() {
  this.showItems = !this.showItems;
  this.showNotification = false;
}

toggleItemsClose() {
  this.showNotification = !this.showNotification;
}

closeItems() {
  this.showItems = false;
}


toggleNotification()
{

    this.showNotification = !this.showNotification;
    this.showItems = false;
}

  
}
