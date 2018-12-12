import { Component, OnInit } from '@angular/core';
import {DBaseService} from '../Services/DB/d-base.service';

@Component({
  selector: 'app-repair-search',
  templateUrl: './repair-search.component.html',
  styleUrls: ['./repair-search.component.css']
})
export class RepairSearchComponent implements OnInit {
  
  VIN;
  ValstybinisNr;
  combined;
  found;

  constructor(private _DBaseService : DBaseService) { }

  ngOnInit() {
    this.initialize();
  }
  
  initialize(){
    var cars;
    this._DBaseService.getCars().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          cars = Response[key];
        }
      }

      var malfunctions;
      this._DBaseService.getMalfunctions().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          malfunctions = Response[key];
        }
      }

      var repairs;
      this._DBaseService.getRepairs().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          repairs = Response[key];
        }
      }
      console.log(cars.length + " - mašinų skaičius");
      this.formCombined(malfunctions, repairs, cars);
      }, err => console.error(err), () => console.log());

      }, err => console.error(err), () => console.log());
    
    }, err => console.error(err), () => console.log());
  }
  findByVIN(){
    this.found = [];
    this.combined.forEach(element => {
      if(element.auto.VIN == this.VIN){
        this.found.push(element);
      }
    });
    //console.log(this.found.length);
  }
  findByLT(){
    this.found = [];
    console.log("Ieško pagal LT");
    console.log(this.combined.length);
    this.combined.forEach(element => {
      if(element.auto.Registracijos_numeris == this.ValstybinisNr){
        console.log("Rado");
        this.found.push(element);
      }
    });
    //console.log(this.found.length);
  }
  formCombined(malfunctions, repairs, cars){
    this.combined = [];
    malfunctions.forEach(malfunction => {
      repairs.forEach(repair => {
        cars.forEach(car => {
          if(malfunction.ID == repair.fk_Gedimas && malfunction.fk_AutomobilisID == car.ID){
            console.log("Rasta kombinacija");
            this.combined.push({auto : car, gedimas : malfunction, remontas : repair});
          }
        });
      });
    });
  }
}
