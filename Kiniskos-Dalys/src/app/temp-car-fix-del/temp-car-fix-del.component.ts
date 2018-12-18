import { Component, OnInit } from '@angular/core';
import {DbCarsService} from '../Services/DbCars/db-cars.service';
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
  constructor(private _dbCarSevice: DbCarsService) { }

  ngOnInit() {
  }

  deleteCar(id) {
    this._dbCarSevice.deleteCar(id).subscribe(Response => {}, err => console.error(err), () => console.log("ištrintas automobilis " + id));

  }
}
