import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);
  onlineStatus$ = this.onlineStatus.asObservable();

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus(true));
    window.addEventListener('offline', () => this.updateOnlineStatus(false));
  }

  private updateOnlineStatus(status: boolean) {
    alert("ffff")
    this.onlineStatus.next(status);
  }
}
