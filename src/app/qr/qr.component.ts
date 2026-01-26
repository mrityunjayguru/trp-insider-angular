import { Component, OnDestroy } from '@angular/core';
import { AfterViewInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderfooterService} from '../headerfooter.service';

import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent implements AfterViewInit {

  router:any;
  urldata:any;
 pageReloadInterval: any;
 headerFooterService :any;
 showItems = false;

 toggleItems() {
   this.showItems = !this.showItems;
 }

 closeItems() {
   this.showItems = false;
 }


  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#front_and_back_camera
  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
    // canvasStyles: [
    //   { /* layer */
    //     lineWidth: 1,
    //     fillStyle: '#00950685',
    //     strokeStyle: '#00950685',
    //   },
    //   { /* text */
    //     font: '17px serif',
    //     fillStyle: '#ff0000',
    //     strokeStyle: '#ff0000',
    //   }
    // ],
  };

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private qrcode: NgxScannerQrcodeService,router : Router,headerFooterService :HeaderfooterService,) { 
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableFooter();
    this.headerFooterService = headerFooterService;
    this.headerFooterService.disableHeader();  
    

    this.router = router;

        if (!localStorage.getItem('foo')) { 
          localStorage.setItem('foo', 'no reload') 
          window.location.reload();  
        } else {
          localStorage.removeItem('foo') 
        }
        




  }

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      // this.handle(this.action, 'start');
     

      
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    
    
    this.urldata=e[0].value;

    window.location.href  = this.urldata;

    //alert(" Niraj "+ e[0].value);

    //this.router.navigate(e[0].value);
    //this.router.navigate([e[0].value]);

    console.log("nnnnnnnnnnnnnnnnnnnnn");
  }

  public handle(action: any, fn: string): void {
    // Fix issue #27, #29
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  public onDowload(action: NgxScannerQrcodeComponent) {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files, 0.5).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      
      this.qrCodeResult = res;
    });
  }

  public onSelects2(files: any) {
    this.qrcode.loadFilesToScan(files, this.config, 0.5).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      console.log(res);

      
      
      this.qrCodeResult2 = res;



    });
    
  }

  startPageReload() {
    this.pageReloadInterval = setInterval(() => {
      window.location.reload();
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  ngOnDestroy() {
    if (this.pageReloadInterval) {
      clearInterval(this.pageReloadInterval);
    }
  }
  
}