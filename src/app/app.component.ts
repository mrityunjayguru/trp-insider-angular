 import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ApiService } from './api.service';
import { Router, NavigationEnd } from '@angular/router';
import { ImgconfigService } from './imgconfig.service';
import { NetworkStatusService } from './network-status-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Event';
  showItems = false;
  showNotification = false;
  apiService :any;

  notificationMessages:any;
  pendingForApprovgal:any;
  imgConfigService: any;
  imgConfig: any;


  isOnline = true;

  constructor(apiService:ApiService, private router: Router,imgConfigService: ImgconfigService,private networkStatusService: NetworkStatusService)
  {
      
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close the notification toggle here
        this.showNotification = false;
        this.showItems = false;
      }
    });
    this.imgConfigService = imgConfigService;
    this.imgConfig = this.imgConfigService.getImageConfig();
    this.showItems = false;
    this.pendingForApprovgal=0;
    this.notificationMessages=["dd"];
    this.apiService = apiService;

     // getAllProductsForApprovalPending


     const userData = localStorage.getItem("otheruserData") || "";
     /*var users = JSON.parse(userData);
     if (users !== undefined && users.id != undefined && users.mobile != undefined) {

     }*/
     



     this.apiService.getAllProductsForApprovalPending().subscribe(
      (response:any) => {

            this.notificationMessages = response.data;
            console.log(this.notificationMessages);
            this.pendingForApprovgal= response.data.length;
            
            
      })
      setInterval(() => {
        this.apiService.getAllProductsForApprovalPending().subscribe(
          (response:any) => {
                this.notificationMessages = response.data;
                
                this.pendingForApprovgal= response.data.length;
          })



          this.networkStatusService.onlineStatus$.subscribe(status => {
            this.isOnline = status;
          })


      }, 30000);
      this.imgConfig = this.imgConfigService.getImageConfig();
  }

  toggleItems() {
    this.showItems = !this.showItems;
    this.showNotification = false;
  }

  closeItems() {
    this.showItems = false;
  }


  toggleNotification()
  {

      this.showNotification = !this.showNotification;
      this.showItems = false;
      
  }

  toggleItemsClose() {
   // this.showItems = !this.showItems;
    this.showNotification = false;
  }


}
