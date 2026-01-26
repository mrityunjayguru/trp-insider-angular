import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
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
  logService :any;

  constructor(logService: LogService, headerFooterService :HeaderfooterService,apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    this.logService = logService;
    this.headerFooterService = headerFooterService;
   
    this.userlength =0;
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.dtRendered = false;

  




    this.apiService.showRequests().subscribe(
      (response: any) => {
        
        this.logService.clog(response,true);
    
        // Assuming 'content' is the array containing the data you want to display
        this.productData = response.data.content;
        this.logService.clog(this.productData,true);
        this.dtRendered = true;
      },
      (error: any) => {
        // Handle the error if needed
        console.error('Error fetching data:', error);
      }
    );
    
    

 
}



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
