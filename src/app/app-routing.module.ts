import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./home/menu/menu.component";
import {CartComponent} from "./home/cart/cart.component";


const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
