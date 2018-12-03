
import { user } from '../../userModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class GetUserService {
  url = "http://localhost:3000/Users";
  constructor(private http: HttpClient) { }

  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

}
