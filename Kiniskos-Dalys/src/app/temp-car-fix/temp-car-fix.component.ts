import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';

@Component({
  selector: 'app-temp-car-fix',
  templateUrl: './temp-car-fix.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarFixComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  @Input() tempCar : TempCar;
  ngOnInit() {
    this.getCar();
  }

  getCar() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tempCar = TempCars.find(tempCar => tempCar.id === id)
  }

  changeCar(Brand:string, Model:string, Year:number, Fuel:string, Power:Date):void {
    const id = +this.route.snapshot.paramMap.get('id');
    TempCars.find(repair => repair.id === id)
  }
}
