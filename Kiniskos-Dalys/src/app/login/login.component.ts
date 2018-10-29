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

  users:user[];
  constructor(private user: GetUserService) { }

  ngOnInit() {

  this.user.getUser().subscribe( (Response:user[])=> {
    this.users=Response;
  })
  }

}
