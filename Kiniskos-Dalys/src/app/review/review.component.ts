import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from '../Services/review/review-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public Review:string;
  public type:string;
  constructor(private serv:ReviewServiceService) { }

  ngOnInit() {
  }
  public ideti(a:string):void{
    var text;
    
    var json = '{'+"\"Data\":"+'"2018-12-11",'+'"Tekstas":"'+this.Review+'",'+'"Tipas":'+(this.type=='Teigiamas'?'"Teigiamas",':'"Neigiamas",')+'"fk_KlientasID":"4"}';
    console.log(json);
    this.serv.setresponse(json).subscribe();
  }
}
