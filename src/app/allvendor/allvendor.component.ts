import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allvendor',
  templateUrl: './allvendor.component.html',
  styleUrls: ['./allvendor.component.css']
})
export class AllvendorComponent {

  allVendorData:any;
  apiService:any;
  logService : any;
  dtRendered:any;
  http:any;
  dtOptions:any;


  constructor(logService : LogService ,apiService:ApiService,http: HttpClient)
  {
    this.http = http;
    this.logService = logService; 
    this.allVendorData = [];
    this.apiService = apiService;
    this.dtRendered = false;

    var obj = { page: "0", size: "2000" }

    this.apiService.getAllVendors().subscribe(
      (response: any) => {

        this.allVendorData = response.data; 
    //       this.logService.clog(this.allVendorData,false);
      
        this.dtRendered = true;
      })

    // this.apiService.getAllVendors().subscribe(
    //     (response: any) => {
          
    //       this.allVendorData = response.data; 
    //       this.logService.clog(this.allVendorData,false);
          
    //     },
    //     (error: any) => {
          
    //       alert("error " + error);
    //     });



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
          title: 'Event Creations AllVendors'
        }
        ,
        {
          extend: 'excelHtml5',
          title: 'Event Creations AllVendors'
        }, {
          extend: 'print',
          title: 'Event Creations AllVendors', // Add the title for PDF
        },

        {
          extend: 'pdfHtml5',
          title: 'Event Creations AllVendors', // Add the title for PDF
        }

      ]
    };

  }



}
