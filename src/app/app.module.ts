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
import {FormsModule} from "@angular/forms";
import { StickyComponent } from './sticky/sticky.component';
import { LoginComponent } from './home/login/login.component';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    SidebarComponent,
    ModalCheckoutComponent,
    StickyComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
