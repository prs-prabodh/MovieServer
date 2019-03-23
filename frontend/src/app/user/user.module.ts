import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    NavbarComponent,
    FooterComponent, 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class UserModule { }
