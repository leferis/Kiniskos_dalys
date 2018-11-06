import { Component, OnInit, Input } from '@angular/core';
import {Repair} from '../repair';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Repairs} from '../mock-repair';
@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
  @Input() repair : Repair;
  ngOnInit() {
    this.getRepair();
  }
  getRepair(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.repair = Repairs.find(repair => repair.id === id)
  }
  changeRepair(Make:string, Model:string, Year:number, Problem:string, Registered:Date):void {
    const id = +this.route.snapshot.paramMap.get('id');
    Repairs.find(repair => repair.id === id)
  }
}
