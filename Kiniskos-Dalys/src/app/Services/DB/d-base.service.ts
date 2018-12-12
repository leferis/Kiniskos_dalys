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
export class DBaseService {

  constructor(private http:HttpClient) { }

  getCars() {
    var line = "http://localhost:3000/api/v1/automobilis";
    return this.http.get(line);
  }

  getMalfunctions(){
    var line = "http://localhost:3000/api/v1/gedimas";
    return this.http.get(line);
  }
  getMalfunction(id){
    var line = "http://localhost:3000/api/v1/gedimas/"+id;
    return this.http.get(line);
  }

  getRepairs(){
    var line = "http://localhost:3000/api/v1/remontas";
    return this.http.get(line);
  }
  getRepair(repairId){
    var line = "http://localhost:3000/api/v1/remontas/"+repairId;
    return this.http.get(line);
  }

  deleteRepair(id){
    var line = "http://localhost:3000/api/v1/remontas/"+id;
    return this.http.delete(line);
  }
  getOrder(orderId){
    var line = "http://localhost:3000/api/v1/uzsakymas/"+orderId;
    return this.http.get(line);
  }
  getBill(id){
    var line = "http://localhost:3000/api/v1/saskaita/"+id;
    return this.http.get(line);
  }
  getCar(id){
    var line = "http://localhost:3000/api/v1/automobilis/"+id;
    return this.http.get(line);
  }
  updateRepair(id, price, finished){

    var body = `{"Remonto_kaina" : "${price}", "Baigtas" : "${finished}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/remontas/"+id;
    console.log(body);
    return this.http.put(line, body, {headers,responseType:"json"})
  }

  createCar(userId, made, make, model, vin, kuras, displacement){

    var body = `{"VIN" : "${vin}", "Marke" : "${make}", "Kuras" : "${kuras}", "Gamybos_Metai" : "${made}", "Modelis" : "${model}", "Kubatura" : "${displacement}", "fk_KlientasID" : "${userId}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/automobilis";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})
  }

  createMalfunction(description, category, automobilisID){

    var body = `{"Aprasymas" : "${description}", "Kategorija" : "${category}", "fk_AutomobilisID" : "${automobilisID}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/gedimas";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})
  }

  createBill(total){
    var body = `{"Data" : "2018-12-12", "Suma" : "${total}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/saskaita";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})
  }

  createOrder(billID, userId){

    var body = `{"Data" : "2018-12-12", "Busena" : "Ruosiamas", "fk_Saskaitatabelio_nr" : "${billID}", "fk_KlientasID" : "${userId}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/uzsakymas";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})
  }

  createRepair(price, orderID, malfunctionID){

    var body = `{"Pradzia" : "2018-12-12", "Numatoma_pabaiga" : "2018-12-20", "Remonto_kaina" : "${price}", "Baigtas" : "false", "fk_UžsakymasId" : "${orderID}" ,"fk_Gedimas" : "${malfunctionID}"}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var line = "http://localhost:3000/api/v1/remontas";
    console.log(body);
    return this.http.post(line, body, {headers,responseType:"json"})
  }
}
