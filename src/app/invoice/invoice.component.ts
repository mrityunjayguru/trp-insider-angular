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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  apiService: any;
  headerFooterService :any;
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
  otheruserdata:any;
  dtOptions: any;
  datatable : any;
  dtRendered :any;
  optionsData:any;
  totalAmount :any;
  totalwsp:any;
  totalqty:any;
  ordertransactionid:any;
  imagePathpdf: any;

  showItems = false;
  
  imageurl :any;
  logService : any;


  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

  @ViewChild('pdfTable') pdfTable!: ElementRef;
  
  exportPDF() {

   

    const newLocal = 'invoice';
   const content = document.getElementById(newLocal);
   if (!content) {
    
     return;
   }
   html2canvas(content).then((canvas) => {
     const pdf = new jsPDF('p', 'mm', 'a4');
     const imgData = canvas.toDataURL('image/png');
     const imgProps = pdf.getImageProperties(imgData);
     const pdfWidth = pdf.internal.pageSize.getWidth();
     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
     pdf.save('content.pdf');
   });

    
 }

 

  
  constructor(logService : LogService ,headerFooterService :HeaderfooterService, apiService :ApiService,imgConfigService: ImgconfigService, router : Router, route:ActivatedRoute)
  {
    this.logService = logService; 
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.dtRendered = false;
    this.imagePathpdf = this.imgConfigService.getImageConfigpdf();

    this.totalAmount = 0;

    let text = "Are you confirm about this transaction ?";
    if (confirm(text) == true) {
     
    this.route.queryParams
    .subscribe((params:any) => {

   
      this.otheruserdata =  JSON.parse(localStorage.getItem("otheruserData") || "{}");

      
      this.logService.clog(" Product Data ",this.otheruserdata,false);
   
      if(this.otheruserdata.id == undefined )
      {
         // alert(" Session has been expired ");
         // this.router.navigate(['/login.component', {}]);

      }



      



    this.apiService.getordersByUser(this.otheruserdata.id, this.otheruserdata.mobile).subscribe(
      (response:any) => {
            this.productData = response.data;
            this.dtRendered = true;


            this.apiService.getusersByMobile(this.otheruserdata.mobile).subscribe(
              (response:any) => {

                this.otheruserdata = response.data;
                

  this.totalAmount = 0;
  this.totalwsp=0;
  this.totalqty =0;
  for (const item of this.productData) {
    
      this.totalqty    = this.totalqty + item.totalquantity;   
      this.totalAmount += item.wsp * item.totalquantity * item.setofpic;
     

  }
  

 
  var ordertransaction = {"userid":{"id": this.otheruserdata.id},"username": this.otheruserdata.firstName,"usermobile":this.otheruserdata.mobile,"usershopname":this.otheruserdata.shopname,"totalqty": this.totalqty, "totalAmount": this.totalAmount}
  this.logService.clog(" Order Data ",ordertransaction,true);

  var formData = new FormData();

    

  formData.append("ordertransaction", JSON.stringify(ordertransaction) );
  this.apiService.saveOrderTransaction(formData).subscribe(
    (response : any) => {
          this.logService.clog(" Order Data ",response,true);

         

          if(response.mesage == "Data Stored successfully." || response.status == 200)
          {
             

          // my code
             var  ordertransactiondata={"userid": this.otheruserdata.id,"usermobile":this.otheruserdata.mobile}
            
             
             var formData1 = new FormData();

             formData1.append("ordertransactiondata", JSON.stringify(ordertransactiondata) );
             this.apiService.ordertransactiondata(formData1).subscribe(
               (responseord : any) => {

                this.ordertransactionid =responseord.data[0].id;


                

                this.apiService.generatepreviouspdf( this.otheruserdata.id, this.otheruserdata.mobile).subscribe(
                  (response : any) => {

                    
                    this.optionsData= response.data;
                    
                    
                    this.logService.clog(" Option Data ",response,true);
                  })


               
                this.apiService.generatepdf( this.otheruserdata.id, this.otheruserdata.mobile,this.otheruserdata.firstName, this.otheruserdata.shopname,this.ordertransactionid).subscribe(
                  (response : any) => {

                    this.ordertransactionid =responseord.data[0].id;
                    this.logService.clog(" PDF Data ",response,true);
                  })
                  var formData2 = new FormData();
                  formData2.append("mobile", this.otheruserdata.mobile );
                  this.apiService.changeotp(formData2).subscribe(
                    (response : any) => {
                     
                  
                      this.ordertransactionid =responseord.data[0].id;
                      this.logService.clog(" Change OTP ",response,true);
                    })




                this.logService.clog(" Order Data ",response,true);

               if(response.status == 200)
               {
                this.logService.clog(" Order Data ",response,true);
               }

             })

            //  my code





          }
    })
    

   
})

  

           
          this.logService.class(" Response data of Invoice Component ",response,true);
           
            



      })

    

  }
  
)


}else{
 


  this.router.navigate(['/afterlogin.component', {"user":null}]);


}

}


ngOnInit() {


  
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 50,
    processing: true,
    title: 'Order form - This is only order form for future reference purposes',
    dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print','pdf'
      ]
  };
}

onOptionChange(selectedOptionId: any) {

     var url = this.imagePathpdf+"/"+selectedOptionId.value + ".pdf";
     window.open(url, '_blank');
     
}


printpdt(url:any)
{


    //window.location.href= url;
    window.open(url, '_blank');
    this.router.navigate(['/login.component', {"user":null}]);
    


}


}



