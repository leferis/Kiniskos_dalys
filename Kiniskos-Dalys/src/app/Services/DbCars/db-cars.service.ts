import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { UrlHandlingStrategy } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DbCarsService {
  public url = "localhost:3000/api/v1/automobilis";
  constructor(private http:HttpClient) { }
  getCars() {
    
    console.log(this.url);
    return this.http.get(this.url);    
  }

  addCar(data) {    
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(this.url,data,{headers,responseType:"json"});
    return this.http.post(this.url,data,{headers,responseType:"json"});
  }

  deleteCar(id) {
    var line = this.url + "/" + id;
    return this.http.delete(line);
  }
  
}
