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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    SidebarComponent,
    ModalCheckoutComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
