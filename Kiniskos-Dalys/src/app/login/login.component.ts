import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../Services/Users/get-user.service';
import { Observable } from "rxjs/";
import { user } from '../userModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: GetUserService) { }
  data: Observable<user>;
  ngOnInit() {
    this.user.getUser().subscribe((Response: user) => {
      this.data = Observable.of(Response);
      console.log(this.data);
    });
    console.log(this.data);
  }

}
