import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared/shared.module';

const components = [
  LoginComponent,
  PageNotFoundComponent,
  NavigateComponent,
  HeaderComponent,
  
]
const models = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  RouterLink,
  MatPaginatorModule, 
  MatCardModule,
  RouterModule,
  FormsModule,
  RouterOutlet,
  CommonModule,
  PublicRoutingModule,
  SharedModule
]

@NgModule({
  declarations: [...components],
  imports: [...models],
  exports: [...components, ...models]
})
export class PublicModule { }
