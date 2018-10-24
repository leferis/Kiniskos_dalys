import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { GetUserService } from './Services/Users/get-user.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    HttpModule
  ],
  providers: [GetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
