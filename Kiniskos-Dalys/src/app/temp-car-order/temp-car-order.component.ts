import { Component, OnInit } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';
import {DbCarsService} from '../Services/DbCars/db-cars.service';
@Component({
  selector: 'app-temp-car-order',
  templateUrl: './temp-car-order.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarOrderComponent implements OnInit {
  tempCars:TempCar[]=TempCars;
  selectedTempCar:TempCar;
  constructor(private _dbCarSevice: DbCarsService) { }

  public cars;
  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this._dbCarSevice.getCars().subscribe(data => {this.cars = data}, err => console.error(err), () => console.log('done loading data'));
  }
}
