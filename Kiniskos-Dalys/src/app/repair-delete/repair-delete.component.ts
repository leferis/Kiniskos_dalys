import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {DBaseService} from '../Services/DB/d-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repair-delete',
  templateUrl: './repair-delete.component.html',
  styleUrls: ['./repair-delete.component.css']
})
export class RepairDeleteComponent implements OnInit {

  success = false;
  constructor(private route: ActivatedRoute, private location: Location, private _DBaseService : DBaseService, private router : Router) { }
  @Input() repair;

  ngOnInit() {
    this.deleteRepair();
  }

  deleteRepair(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.repair = Repairs.find(repair => repair.id === id)
    var repair;
    this._DBaseService.getRepair(id).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          repair = Response[key];
        }
      }
      console.log(repair.fk_UžsakymasId + " remonto užsakymo id");
      
      var order;
      this._DBaseService.getOrder(repair.fk_UžsakymasId).subscribe(Response => {
      for(var key in Response)
      {
        if(Response[key] instanceof Object)
        {
          order = Response[key];
        }
      }
      console.log(order.ID + " užsakymo id");
      
      if(!(order.Busena == "Ivykdytas" && order.Busena == "Vykdomas")){
        this.success = true;
        this._DBaseService.deleteRepair(id).subscribe(Response => {}, err => console.error(err), () => console.log("Ištrintas remontas " + id));
        this.router.navigate(['/MyRepairs']);
      }else{
        this.success = false;
      }

    }, err => console.error(err), () => console.log());

    }, err => console.error(err), () => console.log());
  }
}
