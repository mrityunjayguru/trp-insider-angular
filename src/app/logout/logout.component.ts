import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   constructor(private authService : AuthService, private router: Router) { }

   ngOnInit() {

      var userType =  localStorage.getItem('userType');
      
       if(userType == "Admin")
       {
               this.authService.logout();
               this.router.navigate(['']);
       }
       if(userType == "Customer")
        {
             this.authService.logout();
             this.router.navigate(['login-customer.component']);
        }
        else if(userType == "Vendor")
         {
                this.authService.logout();
                this.router.navigate(['login-vendor.component']);
         }
         else
         {
                  alert(" Kinldy Connect to the Admin ")

        }

   }

}