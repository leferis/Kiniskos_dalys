import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../Services/Users/get-user.service';
import { WorkerService } from '../Services/Worker/worker.service';
import { user } from '../userModel';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/internal/operators/map';
@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.css']
})
export class WorkerCreateComponent implements OnInit {

  constructor(private user: GetUserService,private modalService: NgbModal) { }
  data: user[];
  datauser:user[];
  ads:any;
  Vardas:string;
  Pavarde:string;
  Slaptazodis:string;
  Tabelis:string;
  Pareigos:string;
  Vieta:string;
  ngOnInit() {
   
  this.get();
  }
  get(){
    this.user.getUser().subscribe( (Response)=> {
      for(var key in Response)
     {
        if(Response[key] instanceof Object)
        {
       this.data=Response[key];
         }
        }
    });
  }
  open(modal, employeeIndex) {
    this.modalService.open(modal);
    if(employeeIndex>-1){
   this.Vardas=this.data[employeeIndex].Vardas;
   this.Pavarde=this.data[employeeIndex].Pavarde;
   this.Slaptazodis=this.data[employeeIndex].Slaptazodis;
   this.Tabelis=this.data[employeeIndex].tabelio_nr;
   this.Vieta=this.data[employeeIndex].fk_ImoneImones_Kodas;
   this.Pareigos=this.data[employeeIndex].Pareigos;
    }
    else{
      this.Vardas='';
      this.Pavarde='';
      this.Slaptazodis='';
      this.Tabelis='';
      this.Vieta='';
      this.Pareigos='';
    }
}

save(){
  if(this.Vardas != ''){
    if(this.Pavarde !=''){
      if(this.Slaptazodis=''){
        if(this.Tabelis=''){
          
        }
      }
    }
  }
}
destroy(ind){
 this.user.destroyUser(this.data[ind].tabelio_nr).subscribe(() => {
  this.get();
 });
}
}
