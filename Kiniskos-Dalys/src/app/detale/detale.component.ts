import { Component, OnInit } from '@angular/core';
import { TukstamasService } from '../Services/Sudetinga/tukstamas.service';
import { HttpResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {
 a:any;
 b:any;
  constructor(private ing:TukstamasService) { }

  ngOnInit() {
  }
update(){
  this.ing.insert(this.a,this.b).subscribe((Response:any) =>{
    console.log(Response);
  });
}
}
