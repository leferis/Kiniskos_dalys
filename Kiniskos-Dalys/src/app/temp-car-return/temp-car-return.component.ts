import { Component, OnInit } from '@angular/core';
import {DbCarsService} from '../Services/DbCars/db-cars.service';
@Component({
  selector: 'app-temp-car-return',
  templateUrl: './temp-car-return.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarReturnComponent implements OnInit {
  constructor(private _dbCarSevice: DbCarsService) { }

  public cars;
  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this._dbCarSevice.getCars().subscribe(data => {this.cars = data}, err => console.error(err), () => console.log('done loading data'));
    for (var car in this.cars) {
     // if (car.fk_KlientasID == null)
    }
  } 
}
