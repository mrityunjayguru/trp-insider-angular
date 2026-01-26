import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service' 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { LogService } from '../log.service';



@Component({
  selector: 'app-merchantproducts',
  templateUrl: './merchantproducts.component.html',
  styleUrls: ['./merchantproducts.component.css']
})
export class MerchantproductsComponent  {
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
  route:any;
  user:any;
  http:any;
  snackBar: any;
  base64Image :any;
  dtOptions:any;
  dtRendered :any;
  totalElements: number = 0;
  logService: any;


  Merchantusers:any;
  mdata:any;
  router:any;


  constructor(logService: LogService, headerFooterService :HeaderfooterService, apiService :ApiService,imgConfigService: ImgconfigService,route: ActivatedRoute,http:HttpClient,router:Router)
  {



    this.logService = logService;
    this.router=router;
    this.http=http;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.route=route;
    this.user=[];
    this.dtRendered =false;

    this.route.queryParams
      .subscribe((params:any) => {
       
        this.user = params;
       
      }
    );




    this.mdata = localStorage.getItem("otheruserData");
    this.Merchantusers = JSON.parse(this.mdata);
  
       
  
       //alert(" this.Merchantusers.roleid "+this.Merchantusers.roleid);
       console.log(" ========= add new this.Merchantusers ==========");
      if(this.Merchantusers != undefined)
      {
          if(this.Merchantusers.id != undefined && this.Merchantusers.roleid === "03" && this.Merchantusers.firstName.length > 0 )
          {
              //alert(" valid Vendor ")
          }
          else{
            alert(" Not a Vaild Admin Merchant : Need to login with Admin Merchant credential ");
            this.router.navigate(['/']); // This will redirect to the home page
            return;
          }
  
      }
  




    this.imgConfig = this.imgConfigService.getImageConfig();
    
    var obj = { page: "0", size: "2000" }

    this.apiService.showProductsBymerchantid(obj,this.Merchantusers.id).subscribe(
      (response:any) => {

        this.productData = response.data.content;
        this.logService.clog(this.productData,false);
        this.totalElements= response.data.totalElements;

       

        this.dtRendered =true;
      })

  }


  deleteProd(id:any)
  {
    

    let text = " Are you sure to delete this product ? ";
  if (confirm(text) == true) {
      this.apiService.deleteproducts(id).subscribe((response:any) => {
       alert(response.mesage)
       this.apiService.showProducts().subscribe(
          (response:any) => {
            this.productData = response.data;
            this.logService.clog(this.productData,false);
    
          })
      })

    } else {

        
      
    }

  }



  DownloadProfilePic(imageUrl:any, qrfile:any, designNo:any) {

    this.download(imageUrl)
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = qrfile;
        a.click();
        URL.revokeObjectURL(objectUrl);
        alert("objectUrl "+objectUrl)

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
            'copy', 'csv', 'excel', 'print','pdf'
        ]
    };
  }
  


  nextPage(event: any) {
    

    const request = 
    {"page":event.pageIndex.toString(),
    "size":event.pageSize.toString()
    };
    

   


    this.apiService.showProducts(request).subscribe(
      (response:any) => {

        this.productData = response.data.content;
        this.logService.clog(this.productData,false);

       


        this.dtRendered =true;
      })
}

  

genPdf(imgurl:any,qrfile:any, designnumber:any)
{

 


}


}
