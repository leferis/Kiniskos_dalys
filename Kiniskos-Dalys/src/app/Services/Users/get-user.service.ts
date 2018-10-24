import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import { user } from '../../userModel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class GetUserService {
  url = "http://localhost:3000/Users";
  constructor(private http: Http) { }

  getUser(): Observable<user> {
    return this.http.get(this.url).map((resp: Response) => { resp.json() as user; console.log(resp.json() as user); }).catch((error: any) => Observable.throw(error));
  }

}
