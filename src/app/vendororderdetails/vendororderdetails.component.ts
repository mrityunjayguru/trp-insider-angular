import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import {HeaderfooterService} from '../headerfooter.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-vendororderdetails',
  templateUrl: './vendororderdetails.component.html',
  styleUrls: ['./vendororderdetails.component.css']
})


export class VendororderdetailsComponent {
  apiService: any;
  file1:any;
  file2:any;
  brandid:any;
  brandnumber:any;
  formdata:any;
  productData:any;
  imgConfig: any;
  imgConfigService: any;
  currentDate: any;
  router:any;
  route:any;
  designNo:any;
  headerFooterService :any;
  totalElements: number = 0;
  mainfoot:any;
  users:any;
  obj : any;
  logService : any;

  constructor(logService : LogService , apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute,headerFooterService :HeaderfooterService)
  {
    this.logService = logService;
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 
    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none'; 


    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();

    this.users = JSON.parse(localStorage.getItem("otheruserData") || "null");
    

 
    if(this.users != undefined && this.users.id != undefined && this.users.mobile != undefined)
    {
       
        this.obj = { "uid": this.users.id, "mobile": this.users.mobile};

    }
    else
    {
        alert(" Session has been expired, Please Login Again !");
        this.router.navigate(['/']);
        return;

    }

      




    this.apiService.getAllOrdersByUidAndMobileForVendor(this.obj).subscribe(
      (response:any) => {

          
        // console.log("=================product data============");
      
            this.productData = response.data;
            
            this.logService.clog(" Product Data ",this.productData,false);

            // console.log("=================product data============");

            this.totalElements = 0; // response.data.totalElements;
           
            
            
      })
}


nextPage(event: any) {
    

  
  const request = 
  {"page":event.pageIndex.toString(),
  "size":event.pageSize.toString()
  };
  
  this.apiService.getAllOrdersByUidAndMobileForVendor(this.obj).subscribe(
    (response:any) => {

      this.productData = response.data.content;
      this.logService.clog(" Product Data ",this.productData,false);

     

    })
}

}
