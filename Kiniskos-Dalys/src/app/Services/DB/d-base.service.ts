import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DBaseService {

  constructor(private http:HttpClient) { }

  getCars() {
    var line = "http://localhost:3000/api/v1/automobilis";
    return this.http.get(line);
  }
}
