import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { WorkerComponent } from './worker/worker.component';
import { ReviewComponent } from './review/review.component';
import { WorkerCreateComponent } from './worker-create/worker-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { WokerReviewComponent } from './woker-review/woker-review.component';
import { DetaleComponent } from './detale/detale.component';
import { UzsakymaiComponent } from './uzsakymai/uzsakymai.component';
import { RegistrationComponent } from './registration/registration.component';
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
{path:'registration',component:RegistrationComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
