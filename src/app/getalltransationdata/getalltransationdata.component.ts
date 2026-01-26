import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ImgconfigService } from '../imgconfig.service';

@Component({
  selector: 'app-getalltransationdata',
  templateUrl: './getalltransationdata.component.html',
  styleUrls: ['./getalltransationdata.component.css']
})
export class GetalltransationdataComponent {

  router: any;
  route: any;

  alldata: any;

  apiService: any;
  productData: any;

  uniquemobileData: any;
  selectedMobile: any;

  ordtran: any;
  imgConfigService: any;
  imgConfig: any;
  pdfurl: any;

  filteredMobileData: any;

  totalItems: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];





  constructor(router: Router, route: ActivatedRoute, apiService: ApiService, imgConfigService: ImgconfigService) {
    this.router = router;
    this.apiService = apiService;
    this.imgConfigService = imgConfigService;
    this.imgConfig = imgConfigService.getImageConfigpdf();
    this.pdfurl = "/getalltransationdata.component";

    this.apiService.getAllOrderTransactiondata().subscribe(
      (response: any) => {

        console.log(" data transaction ");
        console.log(response);
        console.log(" data transaction ");

        this.productData = response.data;

        this.apiService.getUniqueMobile().subscribe(
          (responseuniquemobile: any) => {
            this.uniquemobileData = responseuniquemobile.data;
            this.filteredMobileData = this.uniquemobileData;

          })
      })

  }




  onMobileSelect(event: any) {
    // The selected value will be available in event.target.value
    this.selectedMobile = event.target.value;
   
    this.apiService.getIDUniqueByMobile(this.selectedMobile).subscribe(
      (resordtran: any) => {
        this.ordtran = resordtran.data;
        this.pdfurl = this.imgConfig + "/" + this.ordtran[0].id + ".pdf";
      })
  }



  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.filteredMobileData = this.uniquemobileData.filter((item: any) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }



}

