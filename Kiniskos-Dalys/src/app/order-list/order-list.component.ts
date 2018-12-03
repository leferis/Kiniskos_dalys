import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../Services/Users/get-user.service';
import { WorkerService } from '../Services/Worker/worker.service';
import { order } from '../orderModel';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../Services/Order/order.service';
import { Details } from '../DetailsModel';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private user: OrderService,private modalService: NgbModal) { }
  data: order[];
  datauser:Details[];
  ads:any;
  ngOnInit() {
   
  this.user.getOrder().subscribe( (Response:order[])=> {
    this.data=Response;
  });
  this.user.getDetails().subscribe( (Response:Details[])=> {
    this.datauser=Response;
    console.log(Response);
  });
  console.log(this.datauser[0]);
  }
  getData():void{
    console.log(this.data);
  }
  open(modal, employeeIndex) {
    this.modalService.open(modal);
    this.datauser = this.data.map(arr => arr[employeeIndex]);
}

}
