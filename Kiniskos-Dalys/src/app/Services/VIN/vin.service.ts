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
export class VINService {

  constructor(private http:HttpClient) { }

  decodeVin(vin) {
    var line = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/" + vin + "?format=json";
    return this.http.get(line);
    //return this.http.get("https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/1XPFDB9X7ND314415?format=json");
  }
}
