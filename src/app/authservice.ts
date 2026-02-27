import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ApiService } from './apiservice'
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

import {Cidservice} from './cidservice'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

   login(userName: any, password: any): Observable<any>  
   {
       

        const formData = new FormData();
        formData.append("mobile", userName);
        formData.append("otp", password);

      
      this.apiService.loginUser(formData).subscribe(
        (response: any) => {

          try {
            if (response.data.mobile != undefined) {


              
              console.log(" Company Users ");
              console.log(" Company Users ");
              console.log(" Company Users ");
              console.log(" Company Users ");

              console.log(response.data);

              this.cidservice.setCompanyId(response.data.id);
              alert(this.cidservice.getCompanyId());

              console.log(" Company Users ");
              console.log(" Company Users ");
              console.log(" Company Users ");
              console.log(" Company Users ");


              this.isUserLoggedIn = userName == response.data.mobile && password == response.data.otp;
              localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

              localStorage.setItem('userType', "Admin"); 




           
              var user = "";

              // user = response.data.mobile === "9650403954" ? 'afteradminlogin.component' : 'afterlogin.component';

               user = response.data.mobile === "9650403954" ? 'mainpage.component' : 'afterlogin.component';

              alert(" Valid user: " + user);

              if(response.data.roleid != undefined)
              {
                        if(response.data.roleid.length > 0)
                        {

                          if(response.data.roleid == "02")
                          {
                            user = 'vendorhome.component';
                          }
                          else if(response.data.roleid == "03")
                          {
                            user = 'merchant.component';
                          }
                          else if(response.data.roleid == "04")
                          {
                           
                            user = 'afterlogin.component';
                          }
                          else if(response.data.roleid == "05")
                          {
                           
                            user = 'vendormerchanthome.component';
                          }
                        }
             }
              

              localStorage.setItem("otheruserData", JSON.stringify(response.data));

              this.router.navigate(['company/kyb']);
            //  this.router.navigate([user], { queryParams: { user: response.data } });

            } else {
              alert(" Bad Credential "+response.mesage);
            }
          } catch (e) {
            alert(" Bad Credential " + response.mesage);
          }
        },
        (error: any) => {
          alert("error " + error);
        }
      );








   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         
      })
   );
   }


   async loginCustomer(userName: any, password: any): Promise<Observable<any>>  {
       

    const formData = new FormData();
    formData.append("mobile", userName);
    formData.append("otp", password);

  
      await  this.apiService.loginUser(formData).subscribe(
        (response: any) => {



        try {


          if (response.data.mobile != undefined) {




            this.isUserLoggedIn = userName == response.data.mobile && password == response.data.otp;
            localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
            localStorage.setItem('userType', "Customer");


            var user = "login-customer.component";

            if (response.data.roleid != undefined) {
              if (response.data.roleid.length > 0) {
                if (response.data.roleid == "04") {

                  user = 'afterlogin.component';
                }
                else {
                  toast.error("Customer credential required!");
                }

              }
            }


            localStorage.setItem("otheruserData", JSON.stringify(response.data));

            this.router.navigate([user], { queryParams: { user: response.data } });

          } else {
            toast.error(response.mesage);
          }
        } catch (e) {
          toast.error(response.mesage);
        }
      },
      (error: any) => {
        toast.error("An error occurred: " + error);
      }
    );








    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {

      })
    );
  }






  loginVendor(userName: any, password: any): Observable<any> {

    const formData = new FormData();
    formData.append("mobile", userName);
    formData.append("otp", password);


    this.apiService.loginUser(formData).subscribe(
      (response: any) => {





        try {
          if (response.data.mobile != undefined) {



            this.isUserLoggedIn = userName == response.data.mobile && password == response.data.otp;
            localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
            localStorage.setItem('userType', "Vendor");

            var user = "login-vendor.component";

            if (response.data.roleid != undefined) {
              if (response.data.roleid.length > 0) {

                if (response.data.roleid == "02") {
                  user = 'vendorhome.component';
                }
                else if (response.data.roleid == "05") {
                  user = 'vendormerchanthome.component';
                }
                else {
                  toast.error("Vendor or Vendor Merchant credential required!");
                }

              }
            }


            localStorage.setItem("otheruserData", JSON.stringify(response.data));

            this.router.navigate([user], { queryParams: { user: response.data } });

          } else {
            toast.error(response.mesage);
          }
        } catch (e) {
          toast.error(response.mesage);
        }
      },
      (error: any) => {
        toast.error("An error occurred: " + error);
      }
    );








    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {

      })
    );
  }




  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }



  logoutCustomer(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  logoutVendor(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor(private cidservice :Cidservice ,private apiService: ApiService, private router: Router) {



  }
}