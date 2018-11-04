import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { WorkerComponent } from './worker/worker.component';
import { ReviewComponent } from './review/review.component';
import {RepairSubSysComponent} from './repair-sub-sys/repair-sub-sys.component';
import {RepairListComponent} from './repair-list/repair-list.component';
import {RepairComponent} from './repair/repair.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { VinDecodeComponent } from './vin-decode/vin-decode.component';

const routes: Routes =[
{path:'', component: MainComponent},
{path:'Login',component: LoginComponent},
{path:'Account',component:AccountComponent},
{path:'User',component:UserComponent},
{path:'Worker',component:WorkerComponent},
{path:'Review',component:ReviewComponent},
{path:'Repairs',component:RepairSubSysComponent},
{path:'MyRepairs', component:RepairListComponent},
{path:'Repair/:id', component:RepairComponent},
{path:'RepairSearch', component:RepairSearchComponent},
{path: 'DecodeVIN', component:VinDecodeComponent}
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
