import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ReviewComponent } from './checkout/review/review.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { PublicRoutingModule } from '../public/public-routing.module';

const components = [
  CheckoutComponent,
  ShippingComponent,
  PaymentComponent,
  ReviewComponent,
  NavigateComponent,
  HeaderComponent,
]

const mdoels = [
  RouterOutlet,
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FormsModule,
  UserRoutingModule,
  SharedModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  RouterLink,
  MatPaginatorModule, 
  MatCardModule,
  RouterModule,
  PublicRoutingModule,
]

@NgModule({
  declarations: [components],
  imports: [...mdoels],
  exports: [...components, ...mdoels]
})
export class UserModule { }
