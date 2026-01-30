import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapplsService {

  private baseUrl = 'https://atlas.mappls.com/api/places/geocode';

  // 🔑 Replace with your Mappls REST API Key
  private apiKey = '7c1f1f99a49a07f43a34ebe697337dbf';

  constructor(private http: HttpClient) {}

  getLatLng(address: string): Observable<any> {
    const params = new HttpParams()
      .set('address', address)
      .set('itemCount', '1');

    return this.http.get(this.baseUrl, {
      params,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
}
