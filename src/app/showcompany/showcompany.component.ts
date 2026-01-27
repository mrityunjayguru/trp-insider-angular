
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { ActivatedRoute } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service' 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from '../log.service';

import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-showcompany',
  templateUrl: './showcompany.component.html',
  styleUrls: ['./showcompany.component.css']
})
export class ShowcompanyComponent {




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

  page:any;
  size:any;


  logService : any;

   images: { [key: string]: string } = {};
   images1: { [key: string]: string } = {};
   images2: { [key: string]: string } = {};


  constructor( logService : LogService ,headerFooterService :HeaderfooterService, apiService :ApiService,imgConfigService: ImgconfigService,route: ActivatedRoute,http:HttpClient)
  {

    this.logService = logService;
    this.http=http;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
   // this.headerFooterService.enableFooter();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.route=route;
    this.user=[];
    this.dtRendered =false;

    this.page=0;
    this.size=15;



    this.route.queryParams
      .subscribe((params:any) => {
        
        this.user = params;
        
      }
    );


    this.imgConfig = this.imgConfigService.getImageConfig();
    
    var obj = { page: this.page, size: this.size };




    this.apiService.getAllCompany(obj).subscribe(
      (response:any) => {

        this.productData = response.data.content;

        console.log(" Company Data updated ");
        console.log(" Company Data updated ");
        console.log(" Company Data updated ");
        console.log(this.productData);
        console.log(" Company Data ");
        console.log(" Company Data updated ");
        console.log(" Company Data updated ");
        console.log(" Company Data updated ");
        


        this.totalElements= response.data.totalElements;

        this.logService.clog(" Product Data ",this.productData,false);

        this.dtRendered =true;

     this.images = {};
     this.images1 = {};
     this.images2 = {};



    // Fetch image for each product
    this.productData.forEach((item: any) => {
      this.apiService.getImage(item.uploadCompanyLogo).subscribe((blob: any) => {
        this.images[item.uploadCompanyLogo] = URL.createObjectURL(blob);
      });

      this.apiService.getImage(item.companyIdentityDocument).subscribe((blob: any) => {
        this.images1[item.companyIdentityDocument] = URL.createObjectURL(blob);
      });


      this.apiService.getImage(item.companyUploadDocument).subscribe((blob: any) => {
        this.images2[item.companyUploadDocument] = URL.createObjectURL(blob);
      });


    });
  


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
            this.logService.clog(" Product Data ",this.productData,false);
    
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
    



   // alert(event.pageIndex + " " + event.pageSize);


     console.log(event);
    const request = 
    {"page":event.pageIndex.toString(),
    "size":event.pageSize.toString()
    };
    

    
/*
    this.apiService.showProducts(request).subscribe(
      (response:any) => {

        this.productData = response.data.content;

        this.productData.forEach((item: { uploadCompanyLogo: string | number; }) => {
            this.apiService.getImage(item.uploadCompanyLogo).subscribe((blob: Blob | MediaSource) => {
            this.images[item.uploadCompanyLogo] = URL.createObjectURL(blob);
      });
    });

        this.logService.clog(" Product Data ",this.productData,false);
        this.dtRendered =true;
      })
}*/



this.apiService.showProducts(request).subscribe(
  (response: any) => {
    // Store the product data
    this.productData = response.data.content;

    console.log("  this.productData");
    console.log("  this.productData");
    console.log(this.productData);
    console.log("  this.productData");
    console.log("  this.productData");


    // Clear previous images
    this.images = {};

    // Fetch image for each product
    this.productData.forEach((item: any) => {
      this.apiService.getImage(item.uploadCompanyLogo).subscribe((blob: any) => {
        this.images[item.uploadCompanyLogo] = URL.createObjectURL(blob);
      });
    });
  },
  (error:any) => {
    console.error('Error fetching products:', error);
  }
);
  }
  

genPdf(imgurl:any,qrfile:any, designnumber:any)
{



}


searchProductByIDLike(designnumber:any)
{

  console.log(designnumber.value);

      
    this.apiService.getAllProductsByDesignerNoLike(designnumber.value).subscribe(
      (response:any) => {


        console.log(response);
        console.log(response);
        console.log(response);
        this.productData = response.data;
        this.logService.clog(" Product Data ",this.productData,false);
        this.dtRendered =true;
      })



      if(designnumber.value != undefined && designnumber.length <=0 )
      {
        var obj = { page: "0", size: "15" }

        this.apiService.showProducts(obj).subscribe(
          (response:any) => {
    
            this.productData = response.data.content;
            this.totalElements= response.data.totalElements;
    
            this.logService.clog(" Product Data ",this.productData,false);
    
            this.dtRendered =true;
          })
      }

}


}
