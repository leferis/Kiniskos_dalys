import { Component, OnInit } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';
@Component({
  selector: 'app-temp-car-add',
  templateUrl: './temp-car-add.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarAddComponent implements OnInit {
  tempCars:TempCar[]=TempCars;
  selectedTempCar:TempCar;
  constructor() { }

  ngOnInit() {
  }

}
