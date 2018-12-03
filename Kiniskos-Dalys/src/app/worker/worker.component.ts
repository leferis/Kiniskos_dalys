import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor() { }
  Dissable:boolean;
  ngOnInit() {
    this.Dissable=true;
  }
   keisti () {
    this.Dissable=false;
  }

}
