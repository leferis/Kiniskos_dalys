import { Injectable } from '@angular/core';
import { user } from '../../userModel';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class WorkerService {
  http: any;
  url = "http://localhost:3000/Users";
  constructor() { }

  getUser(): Observable<user> {
    return this.http.get(this.url).map((resp: Response) =>  resp.json() as user ).catch((error: any) => Observable.throw(error));
  }
}
