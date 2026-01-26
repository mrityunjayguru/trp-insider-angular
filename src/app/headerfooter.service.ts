import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderfooterService {

  mainhead:any;
  mainfoot:any;

  constructor() { }


  enableHeader()
  {
    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'block'; 

  }

  disableHeader()
  {

    this.mainhead = document.getElementById('mainhead');
    this.mainhead.style.display = 'none'; 
  }


  enableFooter()
  {

    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'block'; 
  }

  disableFooter()
  {
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none'; 

  }




}
