import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

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


import { WorkerCreateComponent } from './worker-create/worker-create.component';
import { WorkerService } from './Services/Worker/worker.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
    VinDecodeComponent,
    WorkerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [GetUserService,WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
