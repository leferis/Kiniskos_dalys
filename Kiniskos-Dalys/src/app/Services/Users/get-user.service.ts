
import { user } from '../../userModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class GetUserService {
  url = "http://localhost:3000/api/v1/darbuotojas";
  constructor(private http: HttpClient) { }

  getUser(){
    var a=this.http.get(this.url);
    console.log(a);
    return this.http.get(this.url,{responseType:"json"});
  }
  updateUser(a,id){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url+"/"+id,a,{headers,responseType:"json"});
  }
  createUser(a){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url,a,{headers,responseType:"json"});
  }
  destroyUser(id:string){
    return this.http.delete(this.url+"/"+id);
  }

}
