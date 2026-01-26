import { Component } from '@angular/core';
import { ImgconfigService } from '../imgconfig.service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogService } from '../log.service';
import { HeaderfooterService } from '../headerfooter.service';

@Component({
  selector: 'app-view-products-for-approval',
  templateUrl: './view-products-for-approval.component.html',
  styleUrls: ['./view-products-for-approval.component.css']
})
export class ViewProductsForApprovalComponent {


  imgConfigService: any;
  ImgconfigService: any;
  formBuilder: any;
  apiService: any;
  router: any;
  route: any;
  http: any;
  productdata: any;
  imgConfig: any;
  productdataArray: any;
  productdataArrayColor: any;
  logService :any;
  headerFooterService:any;

  constructor(headerFooterService :HeaderfooterService,logService: LogService,imgConfigService: ImgconfigService, formBuilder: FormBuilder, apiService: ApiService, router: Router, route: ActivatedRoute, http: HttpClient) {
    this.logService = logService;
    this.imgConfigService = imgConfigService;
    this.formBuilder = formBuilder;
    this.apiService = apiService;
    this.router = router;
    this.route = route;
    this.http = http;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();


    this.imgConfig = this.imgConfigService.getImageConfig();

    this.route.queryParams
      .subscribe((params: any) => {


       
        this.apiService.getproductbyid(params.productid).subscribe(
          (response: any) => {

            this.productdata = response.data;
            this.logService.clog("Product data", this.productdata, true)

            this.productdataArray = [this.productdata.topimage, this.productdata.imgfile0, this.productdata.imgfile1, this.productdata.imgfile2, this.productdata.imgfile3, this.productdata.imgfile4, this.productdata.imgfile5, this.productdata.imgfile6, this.productdata.imgfile7, this.productdata.imgfile8, this.productdata.imgfile9, this.productdata.imgfile10];
            this.productdataArrayColor = ["Top Image", this.productdata.imgcolor0, this.productdata.imgcolor1, this.productdata.imgcolor2, this.productdata.imgcolor3, this.productdata.imgcolor4, this.productdata.imgcolor5, this.productdata.imgcolor6, this.productdata.imgcolor7, this.productdata.imgcolor8, this.productdata.imgcolor9, this.productdata.imgcolor10];
          })
      })
  }


  updateApprovalRejection(id: any, vendorid: any, vendormobile: any, vendorname: any, productapprovalstatus: any) {
    var remarks = prompt("Kindly enter the remarks");

    if (remarks !== null && remarks !== '') {
        var formData = new FormData();
        var str = { 'id': id, 'vendorid': vendorid, 'remarks': remarks, 'vendormobile': vendormobile, 'vendorname': vendorname, 'productapprovalstatus': productapprovalstatus };

        formData.append("updateProductStatus", JSON.stringify(str));

        this.apiService.updateApprovalRejection(formData).subscribe(
            (response: any) => {
                window.location.reload();
            });
    } else {
        // User clicked "Cancel" or entered an empty string, handle accordingly (e.g., show a message or do nothing).
    }
}
}
