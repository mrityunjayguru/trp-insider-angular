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
  selector: 'app-vendormerchantapprove',
  templateUrl: './vendormerchantapprove.component.html',
  styleUrls: ['./vendormerchantapprove.component.css']
})
export class VendormerchantapproveComponent {
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
  userData:any;
  users:any;
  logService : any;



  constructor(logService : LogService ,headerFooterService :HeaderfooterService,apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    
    this.headerFooterService = headerFooterService;
    this.logService = logService; 
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
    


    this.userData = localStorage.getItem("otheruserData")
    this.users= JSON.parse(this.userData);


    if(this.users != undefined && this.users.id !=undefined && this.users.mobile != undefined && this.users.mobile.length == 10 )
    {
  
       this.apiService.getusersByVendoid(this.users.id).subscribe((response:any) => {

          
             this.productData = response.data;
             this.userlength =  this.productData.length 
             this.dtRendered = true;
             
        })
  

    }
    else
    {
         alert(" Session Has been expired ");
         this.router.navigate(['/']);
    }


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

toggleItems() {
  this.showItems = !this.showItems;
}

closeItems() {
  this.showItems = false;
}


toggleNotification()
{

    this.showNotification = !this.showNotification;
}



  approved(id:any, vendorid:any)
  {
    const ad="APPROVED";
    const adremarks = prompt("Please enter remarks for approval :");
    if (adremarks !== null && adremarks.length > 0 ) {
      this.formdata = new FormData();
      // Add data to the FormData object
      this.formdata.append('id', id);
      this.formdata.append('vendorid', vendorid);
      this.formdata.append('ad', ad);
      this.formdata.append('adremarks', adremarks);
      this.update(this.formdata);

    } else { alert("No input provided."); return; }

  }

  disapproved(id:any, vendorid:any)
  {
    const ad="DISAPPROVED";
    const adremarks = prompt("Please enter remarks for disapproval :");
    if (adremarks !== null && adremarks.length > 0) {

      this.formdata = new FormData();
      // Add data to the FormData object
      this.formdata.append('id', id);
      this.formdata.append('vendorid', vendorid);
      this.formdata.append('ad', ad);
      this.formdata.append('adremarks', adremarks);
      this.update(this.formdata);

    } else { 
          alert("No input provided.");  
    }
 }
 

  update(formData: any) {
    // updateApprovedDisapproved
    this.apiService.updateApprovedDisapproved(formData).subscribe(
      (response: any) => {
      
        this.logService.clog(" Product Data ",response,false);
        window.location.reload();
      },
      (error: any) => {
        this.logService.clog(" Product Data ",error,false);
      }
    );
  }
  


}
