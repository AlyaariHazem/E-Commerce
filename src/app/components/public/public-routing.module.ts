import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from '../../shared/components/product-list/product-list.component';
import { ProductDetailComponent } from '../../shared/components/product-detail/product-detail.component';
import { CartComponent } from '../../components/user/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigateComponent } from './navigate/navigate.component';

const routes: Routes = [
  {
    path: '',
    component: NavigateComponent,
    children: [
      { path: '', redirectTo: 'shipping', pathMatch: 'full' },
      { path: 'shipping', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
