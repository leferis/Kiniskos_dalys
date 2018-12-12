import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
 
@Injectable({
  providedIn: 'root'
})
export class TukstamasService {
  d:any;
  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/api/v1/trukstama_dalis";
  insert(a,b){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  var c=  this.http.post("https://content-sheets.googleapis.com/v4/spreadsheets/1DVOSsw1gGGibaym4kWRBrmuBE-Hprv3mWsxyPx1BGlM/values/A1%3AB800:append?insertDataOption=INSERT_ROWS&valueInputOption=RAW&includeValuesInResponse=false&alt=json&key=AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw",
    '{"values":[["'+a+'","'+b+'"]]}').pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => this.insert2(a,b).subscribe()
      )
    );
    return c;
  }
  insert2(a,b){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.d=a;
    var asd=JSON.stringify({Data:'2018-01-01',Dalis:this.d,fk_Darbuotojastabelio_nr:1},null,"  ");
    console.log(asd);
    return this.http.post(this.url,asd,{headers,responseType:"json"})
  }
}
