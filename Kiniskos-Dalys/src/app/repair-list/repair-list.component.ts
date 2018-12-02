import { Component, OnInit } from '@angular/core';
import {Repairs} from '../mock-repair';
import {Repair} from '../repair';
@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs:Repair[]=Repairs;
  selectedRepair:Repair;
  useriui:string = "Mano remontai";
  adminui:string = "Remontai";
  constructor() { }

  ngOnInit() {
  }

}
