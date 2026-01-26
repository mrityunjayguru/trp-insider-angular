import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {  }
  clog(title:any,data:any,flag:any)
  {
            if(flag != undefined && flag == true)
            {
                console.log("======================== " + title + " ====================== at "+new Date()+"============== ");
                console.log(data);
                console.log("======================== " + title + " ====================================================== ");
            }
  }
}
