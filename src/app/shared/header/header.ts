


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
  cid:any;
  user:any;
  

  constructor(private cidservice : Cidservice,private router :Router, private apiService :ApiService)
  {

    
    this.cid = this.cidservice.getCompanyId();
    

    this.apiService.getUserDetailsByid(this.cid).subscribe(
      (response: any) => {
        this.user = response.data;
        console.log("users");
        console.log(this.user);
        console.log("users");

      })


  }


  logout() {

    this.cidservice.clearStorage();
    this.router.navigate(['/login']);
    
    
  }
}

