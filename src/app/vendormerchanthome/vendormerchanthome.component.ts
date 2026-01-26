import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-vendormerchanthome',
  templateUrl: './vendormerchanthome.component.html',
  styleUrls: ['./vendormerchanthome.component.css']
})




export class VendormerchanthomeComponent {

  mainfoot: any;
  logService : any;
  controlEnable:any;
  userMessage:any;


  

  constructor(logService : LogService ,) {
    this.logService = logService; 
    this.controlEnable=false;
    this.userMessage ="Approval is required from the Vendor";


    const userData = localStorage.getItem("otheruserData") || "";
     var users = JSON.parse(userData);
     if (users !== undefined && users.id != undefined && users.mobile != undefined) {
      this.logService.clog(" Product Data ",users,false);
         

          if(users.ad != undefined && users.ad=="APPROVED" && users.roleid=="05")
          {
            this.controlEnable=true;
            this.userMessage="Already approved by the Vendor.";
          }
          else
          { 
            this.controlEnable=false;
            this.userMessage="Approval is required from the Vendor";

          }


     }
     


    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';


    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none';
    // this.headerFooterService = headerFooterService;
    // this.headerFooterService.enableFooter();
  }
}
