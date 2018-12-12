
import { order } from '../../orderModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Details } from '../../DetailsModel';
@Injectable()
export class OrderService {
  url = "http://localhost:3000/api/v1/uzsakymas";
  url1 = "http://localhost:3000/api/v1/saskaita";
  constructor(private http: HttpClient) { }

  getOrder() {
    return this.http.get(this.url);
  }
  getDetails() {
    return this.http.get(this.url1);
  }
  changeStatus(a,id){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url+"/"+id,a,{headers,responseType:"json"});
  }
}
