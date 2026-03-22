
import { Component, signal } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import { ZardIconComponent } from '../components/icon/icon.component';
import { ZardPopoverComponent, ZardPopoverDirective } from '../components/popover/popover.component';
import {Cidservice} from "../../cidservice"
import { ApiService } from '../../apiservice';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ZardPopoverDirective, ZardPopoverComponent, ZardIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})


export class Header {
  cid : any;
  
  user:any;
  

 
  constructor(private router: Router, private cidservice: Cidservice, private apiService :ApiService) {
  this.router.events.subscribe(() => {
    this.cid = this.cidservice.getCompanyId();
    console.log("CID after route change:", this.cid);
  });
}

  ngOnInit() {
    this.cid = Number(this.cidservice.getCompanyId());
    alert("CID : "+ this.cid);

    if (this.cid) {
      this.apiService.getUserDetailsByid(this.cid).subscribe(
        (response: any) => {
          this.user = response.data;
        },
        (error) => {
          console.error("API error:", error);
        }
      );
    }
  }

  
 logout() {
  this.cidservice.clearStorage();
  this.cid = null;
  this.user = null;
  this.router.navigate(['/login']);
}

  

}

