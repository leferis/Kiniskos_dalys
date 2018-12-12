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
export class GetCarsService {

  constructor(private http:HttpClient) { }
  getMakes() {
    var line = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
    return this.http.get(line);    
  }

  getModels(make) {
    var line = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/" + make + "?format=json";
    return this.http.get(line);    
  }
}
