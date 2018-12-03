import { Component, OnInit } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';
@Component({
  selector: 'app-temp-car-fix-del',
  templateUrl: './temp-car-fix-del.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarFixDelComponent implements OnInit {
  tempCars:TempCar[]=TempCars;
  selectedTempCar:TempCar;
  constructor() { }

  ngOnInit() {
  }

}
