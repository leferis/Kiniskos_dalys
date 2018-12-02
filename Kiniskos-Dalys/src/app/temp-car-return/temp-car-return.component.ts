import { Component, OnInit } from '@angular/core';
import { TakenCars } from '../mock-takenCars';
import { TakenCar } from '../takenCar';
@Component({
  selector: 'app-temp-car-return',
  templateUrl: './temp-car-return.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarReturnComponent implements OnInit {
  takenCars:TakenCar[]=TakenCars;
  selectedTakenCar:TakenCar;
  constructor() { }

  ngOnInit() {
  }

}
