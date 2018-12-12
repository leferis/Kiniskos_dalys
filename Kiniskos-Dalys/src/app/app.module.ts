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
import { OrderListComponent } from './order-list/order-list.component';
import { WorkerService } from './Services/Worker/worker.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WokerReviewComponent } from './woker-review/woker-review.component';
import { DetaleComponent } from './detale/detale.component';
import { MovebarComponent } from './movebar/movebar.component';
import { OrderService } from './Services/Order/order.service';
import { UzsakymaiComponent } from './uzsakymai/uzsakymai.component';
import { RegistrationComponent } from './registration/registration.component';
import { TempCarOrderComponent } from './temp-car-order/temp-car-order.component';
import { TempCarReturnComponent } from './temp-car-return/temp-car-return.component';
import { TempCarAddComponent } from './temp-car-add/temp-car-add.component';
import { TempCarFixDelComponent } from './temp-car-fix-del/temp-car-fix-del.component';
import { TempCarSubSysComponent } from './temp-car-sub-sys/temp-car-sub-sys.component';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { OrdersComponent } from './orders/orders.component';
import { NewRepairComponent } from './new-repair/new-repair.component';
import { FormsModule } from '@angular/forms';
import { GetCarsService } from './Services/GetCars/get-cars.service';
import { DbCarsService } from './Services/DbCars/db-cars.service';
import { TempCarFixComponent } from './temp-car-fix/temp-car-fix.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    WorkerComponent,
    ReviewComponent,
    WorkerCreateComponent,
    OrderListComponent,
    WokerReviewComponent,
    DetaleComponent,
    MovebarComponent,
    UzsakymaiComponent,
    RegistrationComponent,
    RepairSubSysComponent,
    RepairListComponent,
    RepairComponent,
    RepairSearchComponent,
    VinDecodeComponent,
    WorkerCreateComponent,
    TempCarOrderComponent,
    TempCarReturnComponent,
    TempCarAddComponent,
    TempCarFixDelComponent,
    TempCarSubSysComponent,
    ShopComponent,
    ShopListComponent,
    OrdersComponent,
    NewRepairComponent,
    TempCarFixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [GetUserService,WorkerService,OrderService,GetCarsService, DbCarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
