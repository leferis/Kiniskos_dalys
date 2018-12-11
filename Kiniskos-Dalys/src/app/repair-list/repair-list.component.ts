import { Component, OnInit } from '@angular/core';
import {Repairs} from '../mock-repair';
import {Repair} from '../repair';
import {DBaseService} from '../Services/DB/d-base.service';
@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs;
  user = 1;
  allCars;
  userCars;
  selectedRepair:Repair;
  useriui:string = "Mano remontai";
  adminui:string = "Remontai";
  constructor(private _DBaseService: DBaseService) { }

  ngOnInit() {
    this.getUserCars();
  }

  getAllCars() {
    this._DBaseService.getCars().subscribe(data => { this.allCars = data}, err => console.error(err), () => console.log('Uzkrove ' + this.user + ' remontuojamus automobilius'));
  }
  getUserCars(){
    this.getAllCars();
    this.userCars = [];
    this.allCars.data.forEach(element => {
      if(parseInt(element.fk_KlientasID) == this.user){
        this.userCars.push(element);
      }
    });
  }

}
