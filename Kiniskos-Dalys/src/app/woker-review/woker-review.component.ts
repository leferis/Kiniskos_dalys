import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../Services/Users/get-user.service';
import { user } from '../userModel';
import { FormsModule } from '@angular/forms';
import { AtsiliepimasDarbuotojasService } from '../Services/darbuotojas/atsiliepimas-darbuotojas.service';
@Component({
  selector: 'app-woker-review',
  templateUrl: './woker-review.component.html',
  styleUrls: ['./woker-review.component.css']
})
export class WokerReviewComponent implements OnInit {

  constructor(private user: GetUserService,private asde:AtsiliepimasDarbuotojasService) { }
  data: user[];
  bedarbis:string;
  tekstas:string;
  tipas;
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
  selectChangeHandler(event:any){
    console.log(event);
    this.tipas = event.target.value;
  }
  update(darbuotojas,reiksme){
    var a =JSON.stringify({Data:'2018-12-11',Aprasymas:this.tekstas,Teigiamas:reiksme,fk_Darbuotojastabelio_nr:darbuotojas},null,"    ");
    console.log(a);
  this.asde.setresponse(a).subscribe();
}
}
