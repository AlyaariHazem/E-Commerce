import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ShippingComponent } from './components/checkout/shipping/shipping.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { ReviewComponent } from './components/checkout/review/review.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },

  {
    path: 'checkout',
    component: CheckoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'shipping', pathMatch: 'full' },
      { path: 'shipping', component: ShippingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'review', component: ReviewComponent },
    ],
  },

  { path: '**', component:PageNotFoundComponent},
];
