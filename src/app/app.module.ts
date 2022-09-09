import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { CartComponent } from './home/cart/cart.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { ModalCheckoutComponent } from './home/modal-checkout/modal-checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './home/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { AddToppingComponent } from './home/add-topping/add-topping.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './home/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TransactionHistoryComponent } from './profile-user/transaction-history/transaction-history.component';
import { RewardsComponent } from './profile-user/rewards/rewards.component';
import { TransactionDetailComponent } from './profile-user/transaction-history/transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    SidebarComponent,
    ModalCheckoutComponent,
    LoginComponent,
    AddToppingComponent,
    RegisterComponent,
    HomePageComponent,
    NavigatorComponent,
    ProfileUserComponent,
    TransactionHistoryComponent,
    RewardsComponent,
    TransactionDetailComponent,

  ],
    imports: [
        BrowserModule,
      BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      MatFormFieldModule,
        ReactiveFormsModule,
      Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
