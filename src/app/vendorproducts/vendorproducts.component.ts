import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderfooterService } from '../headerfooter.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { LogService } from '../log.service';

@Component({
  selector: 'app-vendorproducts',
  templateUrl: './vendorproducts.component.html',
  styleUrls: ['./vendorproducts.component.css']
})
export class VendorproductsComponent {
  vdata: any;
  Vendorusers: any;
  apiService: any;
  headerFooterService: any;
  file1: any;
  file2: any;
  brandid: any;
  brandnumber: any;
  formdata: any;
  productData: any;
  imgConfig: any;
  imgConfigService: any;
  route: any;
  user: any;
  http: any;
  snackBar: any;
  base64Image: any;
  dtOptions: any;
  dtRendered: any;
  totalElements: number = 0;
  mainfoot: any;
  logService: any;
  page:any;
  size:any;


  constructor(logService: LogService, headerFooterService: HeaderfooterService, apiService: ApiService, imgConfigService: ImgconfigService, route: ActivatedRoute, http: HttpClient) {
    this.logService = logService;
    this.vdata = localStorage.getItem("otheruserData");
    this.Vendorusers = JSON.parse(this.vdata);

    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none';


    this.http = http;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.route = route;
    this.user = [];
    this.dtRendered = false;
    this.page=0;
    this.size=15;
    this.route.queryParams
      .subscribe((params: any) => {
        this.user = params;
      }
      );


    this.imgConfig = this.imgConfigService.getImageConfig();

    var obj = { page: "0", size: "25" }

    this.apiService.showProductsByVendoirId(this.Vendorusers.id).subscribe(
      (response: any) => {

        this.productData = response.data;
        this.logService.clog(" Product Data ", this.productData, true);
        // this.totalElements = response.data.totalElements;
        // this.totalElements = 0;
        this.dtRendered = true;
      })

  }



  updatePending(id: any, vendorid: any, vendormobile: any, vendorname: any, productapprovalstatus: any) {
    /*private Long id;
       private Long vendorid;
       private String remarks;
       private String vendormobile;
       private String vendorname;
       private String productapprovalstatus;*/

    var remarks = prompt("Please enter your remarks: ");

    if (remarks !== null) {


    } else {
      alert("Kinldy enter the remarks");
      return;
    }

    var formData = new FormData();
    var str = { 'id': id, 'vendorid': vendorid, 'remarks': remarks, 'vendormobile': vendormobile, 'vendorname': vendorname, 'productapprovalstatus': productapprovalstatus };



    formData.append("updateProductStatus", JSON.stringify(str));

    this.apiService.updatePendingByVendor(formData).subscribe(
      (response: any) => {

      })

  }


  deleteProd(id: any) {


    let text = " Are you sure to delete this product ? ";
    if (confirm(text) == true) {
      this.apiService.deleteproducts(id).subscribe((response: any) => {
        alert(response.mesage)
        this.apiService.showProducts().subscribe(
          (response: any) => {
            this.productData = response.data;       
            this.logService.clog(" Product Data ", this.productData, false);
          })
      })

    } else {



    }

  }



  DownloadProfilePic(imageUrl: any, qrfile: any, designNo: any) {

    this.download(imageUrl)
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = qrfile;
        a.click();
        URL.revokeObjectURL(objectUrl);
        alert("objectUrl " + objectUrl)

      })

  }


  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 30,
      processing: true,
      title: 'Order form - This is only order form for future reference purposes',
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print', 'pdf'
      ]
    };
  }



  nextPage(event: any) {


    const request =
    {
      "page": event.pageIndex.toString(),
      "size": event.pageSize.toString()
    };




    // this.apiService.showProducts(request).subscribe(
    //   (response: any) => {

    //     console.log(response);
        
    //     console.log(this.productData);
        
    //     this.productData = response.data.content;
    //     this.logService.clog(" Product Data ", this.productData);
    //     this.dtRendered = true;
    //   })
    this.apiService.showProductsByVendoirId(this.Vendorusers.id).subscribe(
      (response: any) => {

        console.log(response);
        
        console.log(this.productData);
        
        this.productData = response.data;
        this.logService.clog(" Product Data ", this.productData);
        this.dtRendered = true;
      })
  }



  genPdf(imgurl: any, qrfile: any, designnumber: any) {




    /*this.apiService.generatepdfAdmin( ).subscribe((response:any) => {
  
       
      })*/


  }
}
