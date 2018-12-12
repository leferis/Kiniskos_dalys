import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/Order/order.service';
import { order } from '../orderModel';
import { Details } from '../DetailsModel';

@Component({
  selector: 'app-uzsakymai',
  templateUrl: './uzsakymai.component.html',
  styleUrls: ['./uzsakymai.component.css']
})
export class UzsakymaiComponent implements OnInit {

  constructor(private user: OrderService) { }
  data: order[];
  datauser:Details[];
  ads:any;
  ngOnInit() {
   
  this.user.getOrder().subscribe( (Response)=> {
    for(var key in Response)
   {
      if(Response[key] instanceof Object)
      {
        console.log(key);
     this.data=Response[key];
     console.log(this.data);
       }
      }
  });
  this.user.getDetails().subscribe( (Response)=> {
    for(var key in Response)
   {
      if(Response[key] instanceof Object)
      {
     this.datauser=Response[key];
     console.log(this.datauser);
       }
      }
  });
}
change(ind){
var a = JSON.stringify({Busena:this.data[ind].Busena},null,"   ");
console.log(a);
this.user.changeStatus(a,this.data[ind].Id).subscribe();
}
}