import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./home/menu/menu.component";
import {CartComponent} from "./home/cart/cart.component";
import {LoginComponent} from "./home/login/login.component";
import {AddToppingComponent} from "./home/add-topping/add-topping.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RegisterComponent} from "./home/register/register.component";
import {ProfileUserComponent} from "./profile-user/profile-user.component";
import {
  TransactionDetailComponent
} from "./profile-user/transaction-history/transaction-detail/transaction-detail.component";

const routes: Routes = [
  {path:'detailtransaction',component:TransactionDetailComponent},
  {path:'addtopping',component:AddToppingComponent},
  {path:'cart',component:CartComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'user',component:ProfileUserComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
