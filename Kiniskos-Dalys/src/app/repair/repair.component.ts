import { Component, OnInit, Input } from '@angular/core';
import {Repair} from '../repair';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Repairs} from '../mock-repair';
import { DBaseService } from '../Services/DB/d-base.service';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private _DBaseService:DBaseService) { }

  order;
  repair;
  bill;
  malfunction;
  car;
  loaded = false;

  repairState;
  orderState;
  newPrice;
  error;

  ngOnInit() {
    this.getData();
  }

  changeRepair(Make:string, Model:string, Year:number, Problem:string, Registered:Date):void {
    const id = +this.route.snapshot.paramMap.get('id');
    Repairs.find(repair => repair.id === id)
  }
  changeData(){
    console.log("vykdo");
    if(this.orderState == "" || this.newPrice == "")
    {
      console.log(this.repairState);
      console.log(this.orderState);
      console.log(this.newPrice);
      this.error = "Neteisingai įvesti duomenys";
      console.log("neteisingai");
      return;
    }
    this.repair.Baigtas = this.repairState;
    
    this.order.Busena = this.orderState;
    this.repair.Remonto_kaina = this.newPrice;
    console.log(this.repair.ID);
    this._DBaseService.updateRepair(this.repair.ID, this.newPrice, this.repairState).subscribe(Response => {console.log("updateina")}, err => console.error(err), () => console.log());
  }
  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.repair = Repairs.find(repair => repair.id === id)
    var repair;
    this._DBaseService.getRepair(id).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          repair = Response[key];
        }
      }
      console.log(repair.fk_UžsakymasId + " remonto užsakymo id");

      var order;
      this._DBaseService.getOrder(repair.fk_UžsakymasId).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          order = Response[key];
        }
      }
      console.log(order.Id + " užsakymo id");
      
      var bill;
      this._DBaseService.getBill(order.fk_Saskaitatabelio_nr).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          bill = Response[key];
        }
      }
      console.log(bill.id + " saskaitos id");
      var malfunction;
      this._DBaseService.getMalfunction(repair.fk_Gedimas).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          malfunction = Response[key];
        }
      }
      console.log(malfunction.ID + " gedimo id");
      var car;
      this._DBaseService.getCar(malfunction.fk_AutomobilisID).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          car = Response[key];
        }
      }
      console.log(malfunction.ID + " auto id");
      this.order = order;
      this.repair = repair;
      this.bill = bill;
      this.malfunction = malfunction;
      this.car = car;
      this.loaded = true;
      this.newPrice = this.repair.Remonto_kaina;
      this.repairState = this.repair.Baigtas;
      this.orderState = this.order.Busena;
      }, err => console.error(err), () => console.log());
      }, err => console.error(err), () => console.log());
      }, err => console.error(err), () => console.log());

      }, err => console.error(err), () => console.log());

    }, err => console.error(err), () => console.log());
  }
}