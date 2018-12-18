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
export class ShopServiceService {

   isAdmin = true;

  constructor(private http:HttpClient) { }

  getDalys() {
    var line = "http://localhost:3000/api/v1/dalis";
    return this.http.get(line);
  }

  change()
  {
    this.isAdmin = !this.isAdmin;
    return this.isAdmin;
  }

  AddDalis(Pavadinimas, Aukstis, Ilgis, Kategorija, Kilme,  Pardavimo_Kaina, Paveikslelis, Pirkimo_Kaina, Plotis, Svoris)
  {
    if(Paveikslelis == "default"){
      Paveikslelis = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/a1481556-191e-4b72-8181-2672f0fc8a3f/f380beb0-3781-4023-810d-8b2ad1628349.jpg";
    }
    var body = `{"Pavadinimas" : "${Pavadinimas}", "Aukstis" : "${Aukstis}", "Ilgis" : "${Ilgis}", "Kategorija" : "${Kategorija}", "Kilme" : "${Kilme}", "Pardavimo_Kaina" : "${Pardavimo_Kaina}", "Paveikslelis" : "${Paveikslelis}", "Pirkimo_Kaina" : "${Pirkimo_Kaina}", "Plotis" : "${Plotis}", "Svoris" : "${Svoris}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/dalis";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})    
  }

  getDalis(ID){
    var line = "http://localhost:3000/api/v1/dalis/"+ID;
    return this.http.get(line);
  }

  deleteDalis(ID){
    var line = "http://localhost:3000/api/v1/dalis/"+ID;
    return this.http.delete(line);
  }
  
}
