/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cidservice {
  private readonly STORAGE_KEY = 'companyId';

  private cidSubject = new BehaviorSubject<number>(this.getCompanyId());
  cid$ = this.cidSubject.asObservable();

  constructor() {}

  setCompanyId(companyId: number): void {
    if (companyId > 0) {
      localStorage.setItem(this.STORAGE_KEY, companyId.toString());
      this.cidSubject.next(companyId); // ✅ update observable
    }
  }

  getCompanyId(): number {
    const value = localStorage.getItem(this.STORAGE_KEY);
    return value ? Number(value) : 0; // ✅ always return number
  }

  removeCompanyId(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.cidSubject.next(0); // ✅ reset observable
  }

  clearStorage(): void {
    localStorage.clear();
    this.cidSubject.next(0); // ✅ reset state properly
  }
}
  */

import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cidservice {

  private readonly CID_KEY = 'companyId';
  private cidSubject = new BehaviorSubject<number | null>(this.getCompanyId());
cid$ = this.cidSubject.asObservable();


  constructor() {}

  

  // ✅ Get CID
  getCompanyId(): number | null {
    const cid = localStorage.getItem(this.CID_KEY);
    return cid ? Number(cid) : null;
  }

 setCompanyId(cid: number) {
  localStorage.setItem(this.CID_KEY, cid.toString());
  this.cidSubject.next(cid);
}

clearStorage() {
   localStorage.setItem(this.CID_KEY, "0");
  this.cidSubject.next(null);
}

  // ✅ Check if logged in
  isLoggedIn(): boolean {
    return this.getCompanyId() !== null;
  }
}