import { Component, OnInit } from '@angular/core';
import {TempCars} from '../mock-tempCar';
import {TempCar} from '../tempCar';
import {Brands} from '../mock-brands';
import {Brand} from '../brand';
import {GetCarsService} from '../Services/GetCars/get-cars.service';
import {DbCarsService} from '../Services/DbCars/db-cars.service';
import { from } from 'rxjs';
import {Observable} from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-temp-car-add',
  templateUrl: './temp-car-add.component.html',
  styleUrls: ['../repair-sub-sys/repair-sub-sys.component.css']
})
export class TempCarAddComponent implements OnInit {  

  brands:Brand[]=Brands;
  selectedBrand:Brand;
  public selectedValue1;
  public selectedValue2;
  public selectedValue3;
  public models;
  public tempCar;

  constructor(private _getCarSevice: GetCarsService, private _dbCarSevice: DbCarsService) { }

  ngOnInit() {
    this.getBrandMakes("Acura");
  }

  getModels(make) {
    this._getCarSevice.getModels(make).subscribe(data => {this.models = data}, err => console.error(err), () => console.log('done loading data'));
  }

  public getBrandMakes(brand) {   
    this.getModels(brand);
    this.models = this.models.Results;
  }

  public addCar(input1, input2, input3) {
    console.log(this.selectedValue1);
    console.log(this.selectedValue2);
    console.log(this.selectedValue3);
    console.log(input1);
    console.log(input2);
    console.log(input3);

    var body = `{"VIN":${"0000"}, "Marke": ${this.selectedValue1}, "Modelis":${this.selectedValue2}, "Kubatura":${input2}, "Gamybos_Metai":${input1}, "Registracijos_numeris":${input3},"Modelis":${1}, "Kuras":${this.selectedValue3}}`;
    this._dbCarSevice.addCar(body).subscribe(data => {}, err => console.error(err), () => console.log('done loading data'));
  }
}
