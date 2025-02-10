import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShippingComponent } from './checkout/shipping/shipping.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ReviewComponent } from './checkout/review/review.component';
import { CartComponent } from './cart/cart.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ProductListComponent } from '../../shared/components/product-list/product-list.component';
import { ProductDetailComponent } from '../../shared/components/product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    component: NavigateComponent,
    children: [
      { path: '', redirectTo: 'shipping', pathMatch: 'full' },
      { path: 'shipping', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: '', redirectTo: 'shipping', pathMatch: 'full' },
      { path: 'shipping', component: ShippingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'review', component: ReviewComponent }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
