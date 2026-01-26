import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LogService } from '../log.service';


@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent {
  mainfoot: any;
  queryParams: any;
  router: any;
  route: any;
  users: any;
  userData: any;
  logService: any;


  constructor(logService: LogService, route: ActivatedRoute, router: Router) {

  
    this.router = router;
    this.route = route;
    this.logService = logService;
    this.mainfoot = document.getElementById('mainfoot');
    this.mainfoot.style.display = 'none';
    this.mainfoot = document.getElementById('mainhead');
    this.mainfoot.style.display = 'none';

    this.userData = localStorage.getItem("otheruserData")
    this.users = JSON.parse(this.userData);


    const queryParams = this.route.snapshot.queryParams;

    // Check if the 'user' query parameter exists in queryParams
    if (queryParams.hasOwnProperty('user')) {
      const userValue = queryParams.user;

    } else {
      this.logService.clog(" The user query parameter is not defined in the current URL.", false);
    }


    if (this.users != undefined && this.users.id != undefined && this.users.mobile != undefined && this.users.mobile.length == 10) {


    }
    else {
      alert(" Session Has been expired ");
      this.router.navigate(['/']);
    }
  }
}
