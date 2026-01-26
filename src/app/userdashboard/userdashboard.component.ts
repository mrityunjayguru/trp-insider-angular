import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service' 

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  apiService: any;
  router:any;
  route:any;
  imgConfigService: any;
  imgConfig:any;
  otheruserdata:any;
  productData:any;
  headerFooterService:any;


  constructor(headerFooterService :HeaderfooterService, apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
   
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();

    this.router = router;
    this.route = route;
   
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
   
    this.route.queryParams
    .subscribe((params:any) => {

    


    this.apiService.getuserdashboard(params.mobile).subscribe(
      (response:any) => {
      
                 this.productData = response.data;
         
            
            


      })
         

  })


}



}
