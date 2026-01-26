import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderfooterService } from '../headerfooter.service';
import { LogService } from '../log.service';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-vendormerchantinvoice',
  templateUrl: './vendormerchantinvoice.component.html',
  styleUrls: ['./vendormerchantinvoice.component.css']
})

export class VendormerchantinvoiceComponent implements OnInit {
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
  currentDate: any;
  router: any;
  route: any;
  designNo: any;
  otheruserdata: any;
  otheruserdata1:any;
  dtOptions: any;
  datatable: any;
  dtRendered: any;
  totalwsp: any;
  totalAmount: any;
  totalqty: "" | any;
  content: any;
  imagePathpdf: any;
  logService : any;

  ordertransactionid: any;
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  mainfoot: any;
  

  exportPDF() {



    const content = document.getElementById('pdfTable');
    if (!content) {
      console.error('Element not found!');
      return;
    }
    html2canvas(content).then((canvas) => {


      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('data:image/jpeg;base64,/9j/4AAQSkZJ......', 0.2);
      var pdfWidth = pdf.internal.pageSize.getWidth();
      var pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'JPEG', 0.2, 0.2, pdfWidth, pdfHeight, undefined, "FAST");


      pdf.save('content.pdf');


    });


  }

  constructor(logService : LogService ,headerFooterService: HeaderfooterService, apiService: ApiService, imgConfigService: ImgconfigService, router: Router, route: ActivatedRoute) {



    // this.headerFooterService = headerFooterService;
    // this.headerFooterService.enableFooter();
    // this.headerFooterService = headerFooterService;
    // this.headerFooterService.enableHeader();
    this.logService = logService; 
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.imagePathpdf = this.imgConfigService.getImageConfigpdf();
    this.dtRendered = false;



  
      this.mainfoot = document.getElementById('mainfoot');
      this.mainfoot.style.display = 'none';
  
  
      this.mainfoot = document.getElementById('mainhead');
      this.mainfoot.style.display = 'none';
      // this.headerFooterService = headerFooterService;
      // this.headerFooterService.enableFooter();
    



    this.route.queryParams
      .subscribe((params: any) => {


        this.otheruserdata = JSON.parse(localStorage.getItem("otheruserData") || "{}");
        this.otheruserdata1 = JSON.parse(localStorage.getItem("otheruserData") || "{}");





        if (this.otheruserdata.id == undefined) {
          alert(" Session has been expired ");
          this.router.navigate(['/login.component', {}]);

        }



        this.apiService.getordersByUserByMobile(params.mobile).subscribe(
          (response: any) => {
            this.productData = response.data;
            this.logService.clog(" Product Data ",this.productData,false);
            this.dtRendered = true;
           


            this.apiService.getusersByMobile(params.mobile).subscribe(
              (response: any) => {
                this.otheruserdata = response.data;
                this.logService.clog(" Product Data ",this.otheruserdata,false);

                this.totalAmount = 0;
                this.totalwsp = 0;
                this.totalqty = 0;
                for (const item of this.productData) {

                  this.totalqty = this.totalqty + item.totalquantity;
                  this.totalAmount += item.wsp * item.totalquantity * item.setofpic;


                }
                // my code
                var ordertransactiondata = { "userid": this.otheruserdata.id, "usermobile": this.otheruserdata.mobile }
               

                var formData1 = new FormData();

                formData1.append("ordertransactiondata", JSON.stringify(ordertransactiondata));
                this.apiService.ordertransactiondata(formData1).subscribe(
                  (responseord: any) => {

                    this.ordertransactionid = responseord.data[0].id;



                    this.apiService.generatepdfAdmin(this.otheruserdata.id, this.otheruserdata.mobile, this.otheruserdata.firstName, this.otheruserdata.shopname, this.ordertransactionid).subscribe(
                      (response: any) => {
                        this.ordertransactionid = responseord.data[0].id;

                      })



                    

                   

                  })

                this.dtRendered = true;
                



              })



          })



      }

      )
  }


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      processing: true,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print', {
          extend: 'pdfHtml5',
          title: 'Event Creation - Order form. This is only order form for future reference purposes', // Add the title for PDF
        }
      ]
    };
  }


  sendDiv() {
    this.apiService.sendMail("niit.delhi.ind@gmail.com", "Test Message").subscribe(
      (response: any) => {

        



      })

  }


}
