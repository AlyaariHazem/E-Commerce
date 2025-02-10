import { model, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from '../components/public/public-routing.module';

const components = [
  FooterComponent,
  ProductDetailComponent,
  ProductListComponent
]
const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  RouterLink,
  RouterLinkActive,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatPaginatorModule, 
  MatCardModule,
  RouterModule,
  FormsModule,
  RouterOutlet,
  MatSnackBarModule,
  PublicRoutingModule,
]
@NgModule({
  declarations: components,
  imports: modules,
  exports: [
    ...components, ...modules
  ]
})

export class SharedModule { }
