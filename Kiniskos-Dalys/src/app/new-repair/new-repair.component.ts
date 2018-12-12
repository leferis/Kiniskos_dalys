import { Component, OnInit } from '@angular/core';
import { DBaseService } from '../Services/DB/d-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-repair',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css']
})
export class NewRepairComponent implements OnInit {

  userId = 1;
  
  Kubatura;
  Marke;
  Modelis;
  VIN;
  Gedimas;
  Kategorija;
  Kuras;
  Made;

  constructor(private _DBaseService:DBaseService, private router: Router) { }

  ngOnInit() {
  }

  CreateNew(){
    this._DBaseService.createCar(this.userId, this.Made, this.Marke,this.Modelis,this.VIN, this.Kuras, this.Kubatura).subscribe(Response => {
      var car;
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          car = Response[key];
        }
      }
      console.log("sukurtas auto");


      this._DBaseService.createMalfunction(this.Gedimas, this.Kategorija, car.ID).subscribe(Response => {
        var malfunction;
        for(var key in Response)
        {
          if(Response[key] instanceof Object)
          {
            malfunction = Response[key];
          }
        }
        console.log("sukurtas gedimas");

        this._DBaseService.createBill("0").subscribe(Response => {
          var bill;
          for(var key in Response)
          {
            if(Response[key] instanceof Object)
            {
              bill = Response[key];
            }
          }
          console.log("sukurtaa saskaita");

          this._DBaseService.createOrder(bill.id, this.userId).subscribe(Response => {
            var order;
            for(var key in Response)
            {
              if(Response[key] instanceof Object)
              {
                order = Response[key];
              }
            }
            console.log("sukurtas užsakymas");

            this._DBaseService.createRepair(0,order.Id,malfunction.ID).subscribe(Response => {
              var repair;
              for(var key in Response)
              {
                if(Response[key] instanceof Object)
                {
                  repair = Response[key];
                }
              }
              console.log("sukurtas remontas");
            }, err => console.error(err), () => console.log());

          }, err => console.error(err), () => console.log());

        }, err => console.error(err), () => console.log());

      }, err => console.error(err), () => console.log());

    }, err => console.error(err), () => console.log());
    this.router.navigate(['/MyRepairs']);
  }
}
