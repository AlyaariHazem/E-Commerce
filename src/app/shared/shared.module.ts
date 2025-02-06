import { model, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const components = [
  HeaderComponent,
  FooterComponent
]
const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
]
@NgModule({
  declarations: components,
  imports: modules,
  exports: [
    ...components, ...modules
  ]
})

export class SharedModule { }
