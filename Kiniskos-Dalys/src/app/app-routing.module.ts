import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { WorkerComponent } from './worker/worker.component';
import { ReviewComponent } from './review/review.component';
import { RepairSubSysComponent} from './repair-sub-sys/repair-sub-sys.component';
import { RepairListComponent} from './repair-list/repair-list.component';
import { RepairComponent} from './repair/repair.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { VinDecodeComponent } from './vin-decode/vin-decode.component';
import { TempCarSubSysComponent } from './temp-car-sub-sys/temp-car-sub-sys.component';
import { TempCarOrderComponent } from './temp-car-order/temp-car-order.component';
import { TempCarReturnComponent } from './temp-car-return/temp-car-return.component';
import { TempCarAddComponent } from './temp-car-add/temp-car-add.component';
import { TempCarFixDelComponent } from './temp-car-fix-del/temp-car-fix-del.component';
import { WorkerCreateComponent } from './worker-create/worker-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { WokerReviewComponent } from './woker-review/woker-review.component';
import { DetaleComponent } from './detale/detale.component';
import { UzsakymaiComponent } from './uzsakymai/uzsakymai.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes =[
{path:'', component: MainComponent},
{path:'Login',component: LoginComponent},
{path:'Account',component:AccountComponent},
{path:'User',component:UserComponent},
{path:'Worker',component:WorkerComponent},
{path:'Review',component:ReviewComponent},
{path:'admin/worker',component:WorkerCreateComponent},
{path:'user/list',component:OrderListComponent},
{path:'user/worker',component:WokerReviewComponent},
{path:'worker/part',component:DetaleComponent},
{path:'admin/orders',component:UzsakymaiComponent},
{path:'registration',component:RegistrationComponent},
{path:'Repairs',component:RepairSubSysComponent},
{path:'MyRepairs', component:RepairListComponent},
{path:'Repair/:id', component:RepairComponent},
{path:'RepairSearch', component:RepairSearchComponent},
{path: 'DecodeVIN', component:VinDecodeComponent},
{path:'admin/worker',component:WorkerCreateComponent},
{path:'TempCar',component:TempCarSubSysComponent},
{path:'TempCarOrder',component:TempCarOrderComponent},
{path:'TempCarReturn',component:TempCarReturnComponent},
{path:'TempCarAdd',component:TempCarAddComponent},
{path:'TempCarFixDel',component:TempCarFixDelComponent},
{path: 'Shop', component:ShopComponent},
{path: 'ShopList', component:ShopListComponent},
{path: 'Orders', component:OrdersComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
