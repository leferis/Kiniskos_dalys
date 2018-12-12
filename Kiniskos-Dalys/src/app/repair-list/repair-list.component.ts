import { Component, OnInit } from '@angular/core';
import {Repairs} from '../mock-repair';
import {Repair} from '../repair';
import {DBaseService} from '../Services/DB/d-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs;

  user = 1;
  isAdmin = false;
  islogged = true;
  
  repairIdToDelete;
  deletionSuccessful = false;
  public userCars;
  public userMalfunctions;
  public userRepairs;
  public combined;
  firstInRow;
  selectedRepair:Repair;
  useriui:string = "Mano remontai";
  adminui:string = "Remontai";

  constructor(private _DBaseService: DBaseService, private router: Router) {

  }

  ngOnInit() {
    if(this.islogged){
      this.initialize();
    }else{
      //prisijungti
      this.router.navigate(['/Login']);
    }
  }


  initialize() {
    var cars;
    this._DBaseService.getCars().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          cars = Response[key];
        }
      }
      if(this.isAdmin){
        this.getAllCars(cars);
      }else{
        this.getUserCars(cars);
      }
      console.log(this.userCars.length + " - naudotojo mašinų skaičius");

      var malfunctions;
      this._DBaseService.getMalfunctions().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          malfunctions = Response[key];
        }
      }
      this.getUserMalfunctions(malfunctions);
      console.log(this.userMalfunctions.length + " - naudotojo gedimu skaičius");

      var repairs;
      this._DBaseService.getRepairs().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          repairs = Response[key];
        }
      }
      this.getUserRepairs(repairs);
      this.formCombined();
      console.log(this.userRepairs.length + " - naudotojo remontu skaičius");
      console.log(this.combined.length + " - kombinaciju skaičius");
      }, err => console.error(err), () => console.log());

      }, err => console.error(err), () => console.log());
    
    }, err => console.error(err), () => console.log('Uzkrove naudotojo id: ' + this.user + ' remontuojamus automobilius'));

    

    
  }
  /*
  var cars;
    this._DBaseService.getCars().subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          cars = Response[key];
        }
      }
      this.getUserCars(cars);
    }, err => console.error(err), () => console.log(''));
    */
  FirstInRow(){
    var min = this.combined[0];
    for (let index = 0; index < this.combined.length; index++) {
      if(this.combined[index].remontas.Baigtas == false && this.combined[index].remontas.Pradzia < min.remontas.Pradzia){
        min = this.combined[index];
      }
    }
    if(min.remontas.Baigtas == false){
      this.firstInRow = min;
    }
  }
  Sort(mode){
    for(var i = 0; i < this.combined.length; i++){
      //set min to the current iteration of i
      var min = i;
      for(var j = i+1; j < this.combined.length; j++){
        if(mode == "Markė"){
          if(this.combined[j].auto.Marke < this.combined[min].auto.Marke){
            min = j;
          }
        }
        if(mode == "Modelis"){
          if(this.combined[j].auto.Modelis < this.combined[min].auto.Modelis){
            min = j;
          }
        }
        if(mode == "Kuro tipas"){
          if(this.combined[j].auto.Kuras < this.combined[min].auto.Kuras){
            min = j;
          }
        }
        if(mode == "Data"){
          if(this.combined[j].remontas.Pradzia < this.combined[min].remontas.Pradzia){
            min = j;
          }
        }
      }
      var temp = this.combined[i];
      this.combined[i] = this.combined[min];
      this.combined[min] = temp;
    }
    
  }
  formCombined(){
    this.combined = [];
    this.userMalfunctions.forEach(malfunction => {
      this.userRepairs.forEach(repair => {
        this.userCars.forEach(car => {
          if(malfunction.ID == repair.fk_Gedimas && malfunction.fk_AutomobilisID == car.ID){
            console.log("Rasta kombinacija");
            this.combined.push({auto : car, gedimas : malfunction, remontas : repair});
          }
        });
      });
    });
  }
  getUserRepairs(repairs){
    this.userRepairs = [];
    repairs.forEach(repair => {
      this.userMalfunctions.forEach(malfunction => {
        if(malfunction.ID == repair.fk_Gedimas)
        {
          this.userRepairs.push(repair);
        }
      });
    });
  }
  getUserMalfunctions(malfunctions){
    this.userMalfunctions = [];
    malfunctions.forEach(malfunction => {
      this.userCars.forEach(car => {
        if(malfunction.fk_AutomobilisID == car.ID)
        {
          this.userMalfunctions.push(malfunction);
        }
      });
    });
  }
  getUserCars(cars){
    this.userCars = [];
    cars.forEach(element => {
      if(parseInt(element.fk_KlientasID) == this.user){
        this.userCars.push(element);
      }
    });
  }
  getAllCars(cars){
    this.userCars = [];
    cars.forEach(element => {
      if(!element.Pakaitinis_Auto){
        this.userCars.push(element);
      }
    });
  }
}
