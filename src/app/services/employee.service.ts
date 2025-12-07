import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'https://bdmkfj2iu7.execute-api.ap-south-1.amazonaws.com/Prod/Prod';  // ← replace with real link

  constructor(private http: HttpClient) {}

  // POST - create employee
 createEmployee(employee: any): Observable<any> {
  return this.http.post(
    `${this.baseUrl}/createemployee`,
      JSON.stringify(employee),
       { responseType: 'text' }
      
  );
}

  // GET - all employees
  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallemployee`);
  }
}
