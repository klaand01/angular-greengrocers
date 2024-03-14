import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, CheckoutComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
