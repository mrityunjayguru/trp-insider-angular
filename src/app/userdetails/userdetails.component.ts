import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderfooterService } from '../headerfooter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  apiService: any;
  imgConfigService: any;
  formdata: any;
  productData: any;
  imgConfig: any;
  router: any;
  route: any;
  currentDate: any;
  otheruserdata: any;
  headerFooterService
  dtOptions: any;
  datatable: any;
  dtRendered: any;
  userlength: any;
  userid: any;
  usermobile: any;
 
  
  constructor(headerFooterService: HeaderfooterService, apiService: ApiService, imgConfigService: ImgconfigService, router: Router, route: ActivatedRoute) {
    this.headerFooterService = headerFooterService;
    /*
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();*/
    this.userlength = 0;
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.dtRendered = false;

    this.route.queryParams
      .subscribe((params: any) => {

        this.apiService.getusers().subscribe(
          (response: any) => {
            this.productData = response.data;
            this.userlength = this.productData.length
            this.dtRendered = true;
          })
      }
      )
  }


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print', 'pdf'
      ]
    };
  }


  

  enable(userid:any , usermobile:any) {
    this.userid = userid;
    this.usermobile = usermobile;
    const userflag: boolean = false;
    this.apiService.updateUserEnableDisable(this.userid, this.usermobile,userflag).subscribe(
      (response: any) => {
        console.log("==============response============");        
        // console.log(response); 
        if(response.status == 200){
          alert("User Active successfully");          
        }
        console.log("==============response============");
      
      },
      (error: any) => {
        console.error('Error:', error); 
      }
    );
  }


  disable(userid:any , usermobile:any) {
    this.userid = userid;
    this.usermobile = usermobile;
    const userflag: boolean = true;

    this.apiService.updateUserEnableDisable(this.userid, this.usermobile,userflag).subscribe(
      (response: any) => {
        console.log("==============response============");
        if(response.status == 200){
          alert("User Deactive successfully");          
        }
        console.log("==============response============");
     
      },
      (error: any) => {
        console.error('Error:', error); 
      }
    );
  
  }
}
