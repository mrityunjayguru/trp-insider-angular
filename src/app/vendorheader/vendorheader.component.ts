import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../log.service';


@Component({
  selector: 'app-vendorheader',
  templateUrl: './vendorheader.component.html',
  styleUrls: ['./vendorheader.component.css']
})
export class VendorheaderComponent {
  title = 'Event';
  showItems = false;
  apiService: any;
  showNotification = false;
  notificationMessages: any;
  pendingForApprovgal: any;
  vdata: any;
  Vendorusers: any;
  queryParams: any;
  users: any;
  userData: any;
  route: any;
  logService: any;


  constructor(apiService: ApiService, private router: Router, route: ActivatedRoute, logService: LogService) {


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close the notification toggle here
        this.showNotification = false;
        this.showItems = false;
      }
    });
    this.pendingForApprovgal = 0;
    this.notificationMessages = ["dd"];
    this.apiService = apiService;
    this.logService = logService;

    this.vdata = localStorage.getItem("otheruserData");
    this.Vendorusers = JSON.parse(this.vdata);



    if (this.Vendorusers == undefined && this.Vendorusers.id == undefined) {
      alert(" Session has been expired ");
      return;
    }

    
    this.apiService.getAllPendingProductsByVendorid(this.Vendorusers.id).subscribe(
      (response: any) => {

        this.notificationMessages = response.data;
        this.pendingForApprovgal = response.data.length;



      })





   


  }






  toggleItems() {
    this.showItems = !this.showItems;
    this.showNotification = false;
  }

  toggleItemsClose() {
    // this.showItems = !this.showItems;
    this.showNotification = false;
  }



  closeItems() {
    this.showItems = false;
  }

  toggleNotification() {

    this.showNotification = !this.showNotification;
    this.showItems = false;
  }

}
