import { Component } from '@angular/core';
import {HeaderfooterService} from '../headerfooter.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendormarchantheader',
  templateUrl: './vendormarchantheader.component.html',
  styleUrls: ['./vendormarchantheader.component.css']
})
export class VendormarchantheaderComponent {

   title = 'Event';
  showItems = false;
  apiService :any;
  showNotification = false;
  // notificationMessages:any;
  pendingForApprovgal:any;
  vdata:any;
  Vendorusers:any;
  mainfoot:any;

  constructor(apiService:ApiService)
  {


    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 


    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none'; 
      
    this.pendingForApprovgal=0;
    // this.notificationMessages=["dd"];
    this.apiService = apiService;


    this.vdata = localStorage.getItem("otheruserData");
    this.Vendorusers = JSON.parse(this.vdata);

   
    if(this.Vendorusers == undefined && this.Vendorusers.id == undefined)
    {
      alert(" Session has been expired ");
      return;
    }


  }


  toggleItems() {
    this.showItems = !this.showItems;
  }

  closeItems() {
    this.showItems = false;
  }

  // toggleNotification()
  // {

  //     this.showNotification = !this.showNotification;
  // }

}
