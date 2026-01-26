import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrls: ['./vendordetails.component.css']
})
export class VendordetailsComponent implements OnInit {
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
 



  constructor(headerFooterService: HeaderfooterService, apiService: ApiService, imgConfigService: ImgconfigService, route: ActivatedRoute, http: HttpClient) {

    
    this.http = http;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.route = route;
    this.user = [];
    this.dtRendered = false;


    this.route.queryParams
      .subscribe((params: any) => {
      
        this.user = params;
      
      }
      );


    this.imgConfig = this.imgConfigService.getImageConfig();

    var obj = { page: "0", size: "2000" }

    this.apiService.showProducts(obj).subscribe(
      (response: any) => {

        this.productData = response.data.content;

      

        this.dtRendered = true;
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

          })
      })

    } else {



    }

  }



  DownloadProfilePic(imageUrl: any, qrfile: any, designNo: any) {

    this.download(imageUrl)
      .subscribe((blob: Blob | MediaSource) => {
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
      pageLength: 50,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
        'copy',

        {
          extend: 'csvHtml5',
          title: 'OrdersDetails'
        }
        ,
        {
          extend: 'excelHtml5',
          title: 'OrdersDetails'
        }, {
          extend: 'print',
          title: 'OrdersDetails', // Add the title for PDF
        },

        {
          extend: 'pdfHtml5',
          title: 'OrdersDetails', // Add the title for PDF
        }

      ]
    };

  }



}
