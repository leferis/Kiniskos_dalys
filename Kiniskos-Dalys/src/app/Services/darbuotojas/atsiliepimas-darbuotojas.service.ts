
import { user } from '../../userModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AtsiliepimasDarbuotojasService {
  url = "http://localhost:3000/api/v1/atsiliepimas";
  constructor(private http: HttpClient) { }

  setresponse(data){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url,data,{headers,responseType:"json"});
  }
}
