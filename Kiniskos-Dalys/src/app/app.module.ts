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
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { WorkerComponent } from './worker/worker.component';
import { ReviewComponent } from './review/review.component';
import { RepairSubSysComponent } from './repair-sub-sys/repair-sub-sys.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { RepairComponent } from './repair/repair.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { VinDecodeComponent } from './vin-decode/vin-decode.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    WorkerComponent,
    ReviewComponent,
    RepairSubSysComponent,
    RepairListComponent,
    RepairComponent,
    RepairSearchComponent,
    VinDecodeComponent
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
