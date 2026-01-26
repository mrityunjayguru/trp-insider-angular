import { Component } from '@angular/core';
import { HeaderfooterService } from '../headerfooter.service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-admin-log',
  templateUrl: './view-admin-log.component.html',
  styleUrls: ['./view-admin-log.component.css']
})

export class ViewAdminLogComponent {
  headerFooterService:any;
  formBuilder:any;
  apiService: any;
  imgConfigService: any;
  router: any;
  route: any;
  actionHistoryData : any;
    
constructor(headerFooterService :HeaderfooterService,formBuilder:FormBuilder, apiService: ApiService, imgConfigService: ImgconfigService, router: Router, route: ActivatedRoute) {

  this.headerFooterService=headerFooterService;
  this.formBuilder=formBuilder;
  this.apiService= apiService;
  this.imgConfigService=imgConfigService;
  this.router=router;
  this.route=route;

  this.route.queryParams.subscribe((params:any) => {
    if(params.productid != undefined)
    {

      this.apiService.getactionHistoryByID(params.productid).subscribe(
        (response:any) => {

              this.actionHistoryData = response.data;
              
              
             
             
        })



    }
    else
    {
      alert(" Need to select Product Id : kindly coordinate to admin");
    }

  } ); 

}



}
