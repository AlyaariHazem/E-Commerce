import { model, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

const components = [
  HeaderComponent,
  FooterComponent
]
const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  RouterLink,
  RouterLinkActive,
]
@NgModule({
  declarations: components,
  imports: modules,
  exports: [
    ...components, ...modules
  ]
})

export class SharedModule { }
