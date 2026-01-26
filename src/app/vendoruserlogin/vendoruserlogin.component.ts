import {AfterViewInit, Component, OnInit, VERSION, ViewChild} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeaderfooterService } from '../headerfooter.service';
import { Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendoruserlogin',
  templateUrl: './vendoruserlogin.component.html',
  styleUrls: ['./vendoruserlogin.component.css']
})


export class VendoruserloginComponent implements OnInit {
  [x: string]: any;

 
  @ViewChild('scanner')
  scanner!: ZXingScannerComponent;

  @ViewChild('videoElement') videoElement!: any;

  mainhead: any
  mainfoot: any;
  route: any;
  user: any;
  headerFooterService: any;
  apiService: any;
  otheruserdata: any;
  ngVersion = VERSION.full;
  productData: any;
  prolength: any;

  

  allowedFormats = [BarcodeFormat.QR_CODE];
  hints = new Map();



  hasDevices: boolean | undefined;
  hasPermission: boolean | undefined;
  qrResultString: string | undefined;
  qrResult: Result | undefined;
  availableDevices: MediaDeviceInfo[] | undefined;
  currentDevice: MediaDeviceInfo | undefined;

  dataF: any;

  scannerEnabled = false;
  showItems = false;

  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

  constructor(route: ActivatedRoute, headerFooterService: HeaderfooterService, apiService: ApiService,) {


    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.route = route;
    this.apiService = apiService;
   

    this.user = null;

    this.route.queryParams
      .subscribe(async (params: any) => {

      
        this.user = params.user;
      



        this.apiService.getordersByUser(this.otheruserdata.id, this.otheruserdata.mobile).subscribe(
          (response: any) => {
            this.productData = response.data;
            this.prolength = this.productData.length;
          



          })



      });







    /*    
    
      
      this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
        alert(" Camera Found ");
        this.hasDevices = true;
         this.availableDevices = devices;
      });
      this.scanner.camerasNotFound.subscribe(() => {
    
    
         this.hasDevices = false;
      });
      this.scanner.scanComplete.subscribe((result: Result) => {
         this.qrResult = result;
         alert(this.qrResult);
    
         this.hasPermission = false;
      });
      this.scanner.permissionResponse.subscribe((perm: boolean) => {
    
        alert(" Permission ");
        this.hasPermission = perm;
      });
    
    */






  }
  ngOnInit(): void {
    this.initializeCamera();
  }





  handleFailure(e: any) {

    
  }


  onScanSuccess(result: Result | any): void {

    this.qrResultString = result;
  

    alert(result);

    // Handle the scanned result here
  }

  onScanError(error: any): void {
    console.error('Scan error:', error);
    // Handle the scan error here
  }


  initializeCamera() {
    /* if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
       navigator.mediaDevices.getUserMedia({ video: true })
         .then(stream => {
           this['videoElement'].nativeElement.srcObject = stream;
         })
         .catch(error => {
           console.log('Error accessing camera:', error);
         });
     }*/
  }


  OpenCamera() {
    this.scannerEnabled = true;

  }



}

