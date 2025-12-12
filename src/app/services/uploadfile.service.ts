

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor() { }
}



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  getPresignedUrl(filename: string, filetype: string) {
    const params = new HttpParams()
      .set('filename', filename)
      .set('filetype', filetype);

    return this.http.get<{ uploadURL: string }>(
      'http://localhost:3000/generate-presigned-url',
      { params }
    );
  }

  uploadFileToS3(uploadUrl: string, file: File) {
    const headers = new HttpHeaders({
      'Content-Type': file.type
    });

    return this.http.put(uploadUrl, file, {
      headers,
      reportProgress: true,
      observe: 'events'
    });
  }
}
