
import { order } from '../../orderModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Details } from '../../DetailsModel';
@Injectable()
export class OrderService {
  url = "http://localhost:3000/Order";
  url1 = "http://localhost:3000/Products";
  constructor(private http: HttpClient) { }

  getOrder(): Observable<order[]> {
    return this.http.get<order[]>(this.url);
  }
  getDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(this.url1);
  }
}
