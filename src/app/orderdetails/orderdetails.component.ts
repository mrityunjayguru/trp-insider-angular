import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';
import { HeaderfooterService } from '../headerfooter.service';
import { LogService } from '../log.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  apiService: any;
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
  headerFooterService: any;
  totalElements: number = 0;
  logService: any;
  designnumber:any;
  dtRendered :any;
  http:any;
  // dtOptions:any;
  page:any;
  size:any;
  user:any;

  
  constructor(logService: LogService, apiService: ApiService, imgConfigService: ImgconfigService, router: Router, route: ActivatedRoute, headerFooterService: HeaderfooterService,http:HttpClient) {
    this.http=http;
    this.logService = logService;
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.enableFooter();
    this.router = router;
    this.route = route;
    this.currentDate = new Date();
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.dtRendered =false;
    this.designnumber = "";

    this.user=[];
    this.page=0;
    this.size=15;

    
    this.route.queryParams
      .subscribe((params:any) => {
        
        this.user = params;
        
      }
    );

    var obj = { page: "0", size: "15" }


    this.apiService.getorders(obj).subscribe(
      (response: any) => {
        this.productData = response.data.content;
        this.logService.clog("Product Data:", this.productData, false)
        this.totalElements = response.data.totalElements;
        this.dtRendered =true;
       
      })

  }



  applyFilter(filterValue: any) {
    filterValue = filterValue.value
     this.apiService.getAllProductsByDesigner(filterValue).subscribe((response: any) => {
      console.log("=========getAllProductsByDesigner====================");
      console.log(response);
      console.log("=========getAllProductsByDesigner=====================");
    });
  }




  nextPage(event: any) {
    const request =
    {
      "page": event.pageIndex.toString(),
      "size": event.pageSize.toString()
    };

    this.apiService.getorders(request).subscribe(
      (response: any) => {
        // Check if the 'content' property exists and is an array
        if (response && response.data.content && Array.isArray(response.data.content)) {
          this.productData = response.data.content;
          this.logService.clog("Product Data:", this.productData, true);
          this.dtRendered = true;
        } else {
          // Handle the case where 'content' property is not an array or is undefined
          console.error("Expected an array in 'content' property but received:", response && response.content);
          // You can handle this situation further, such as showing an error message to the user
        }
      },
      (error: any) => {
        // Handle API call errors
        console.error("Error fetching orders:", error);
        // You can also handle this error case further, such as showing an error message to the user
      }
    );
    
    
    
  }



  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  // ngOnInit() {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 30,
  //     processing: true,
  //     title: 'Order form - This is only order form for future reference purposes',
  //     dom: 'Bfrtip',
  //       buttons: [
  //           'copy', 'csv', 'excel', 'print','pdf'
  //       ]
  //   };
  // }
  


  

searchOrderByIDLike(designnumber:any)
{
     console.log(designnumber);
     this.apiService.getAllOrdersByUserdesignnumberLike(designnumber).subscribe(
      (response:any) => {
           this.productData = response.data;
           this.logService.clog(" Product Data ",this.productData,false);
      
      })

      if(designnumber.value != undefined && designnumber.length <=0 )
      {
        var obj = { page: "0", size: "15" }


        this.apiService.getorders(obj).subscribe((response: any) => {
            this.productData = response.data.content;
            this.logService.clog("Product Data:", this.productData, false)
            this.totalElements = response.data.totalElements;
              
          })
      }
}




searchOrderByIDLike1(designnumber:any)
{
     console.log(designnumber.value);
     
      if(designnumber != undefined && designnumber.value.length <=0 )
      {
        var obj = { page: "0", size: "15" }


        this.apiService.getorders(obj).subscribe((response: any) => {
            this.productData = response.data.content;
            this.logService.clog("Product Data:", this.productData, false)
            this.totalElements = response.data.totalElements;
              
          })
      }
}



showOrderByDesign()
{
    this.searchOrderByIDLike(this.designnumber);
}






}
