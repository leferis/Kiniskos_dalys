import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../Services/Users/get-user.service';
import { WorkerService } from '../Services/Worker/worker.service';
import { user } from '../userModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.css']
})
export class WorkerCreateComponent implements OnInit {

  constructor(private user: GetUserService) { }
  data: user[];
  ads:any;
  ngOnInit() {
   
  this.user.getUser().subscribe( (Response:user[])=> {
    this.data=Response;
  });
  }
  getData():void{
    console.log(this.data);
  }
}
