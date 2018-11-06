import { Component, OnInit } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';
@Component({
  selector: 'app-temp-car-order',
  templateUrl: './temp-car-order.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarOrderComponent implements OnInit {
  tempCars:TempCar[]=TempCars;
  selectedTempCar:TempCar;
  constructor() { }

  ngOnInit() {
  }

}
