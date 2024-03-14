import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes =
[
  {
    path: '',
    component: StoreComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
