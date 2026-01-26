import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import {HeaderfooterService} from '../headerfooter.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.component.html',
  styleUrls: ['./userorderdetails.component.css']
})
export class UserorderdetailsComponent {
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
  headerFooterService:any;
  otheruserdata:any;

  showItems = false;
  totalAmount: any;
  totalwsp: any;
  totalqty: any;
  logService : any;

  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

  constructor(logService : LogService ,headerFooterService :HeaderfooterService, apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    this.logService = logService; 
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();

    this.route.queryParams
    .subscribe((params:any) => {

   
             
      this.otheruserdata =  JSON.parse(localStorage.getItem("otheruserData") || "{}");

     
   
      if(this.otheruserdata.id == undefined )
      {
          alert(" Session has been expired ");
          this.router.navigate(['/login.component', {}]);

      }



    this.apiService.getordersByUser(this.otheruserdata.id, this.otheruserdata.mobile).subscribe(
      (response:any) => {
            this.productData = response.data;

            alert("Done")
            console.log("===================================");
            console.log(this.productData);
            console.log("===================================");
            this.logService.clog(" Product Data ",this.productData,false);
            
             this.totalAmount = 0;
             this.totalwsp=0;
             this.totalqty =0;
             for (const item of this.productData) {
               
                 this.totalqty    = this.totalqty + item.totalquantity;   
                 this.totalAmount += item.wsp * item.totalquantity * item.setofpic;
                
                
             }

      })
      

    

  }
)}
}
