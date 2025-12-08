

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private baseUrl = 'https://bdmkfj2iu7.execute-api.ap-south-1.amazonaws.com/Prod/Prod';  // ← replace with real link

  constructor(private http: HttpClient) {}

  // POST - create employee
 createCompany(company: any): Observable<any> {
  return this.http.post(
    `${this.baseUrl}/createcompany`,
      JSON.stringify(company),
       { responseType: 'text' }
      
  );
}

  // GET - all employees
  getAllCompany(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallcompany`);
  }
}
