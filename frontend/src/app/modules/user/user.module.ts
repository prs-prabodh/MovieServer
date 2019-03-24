import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { UserMainComponent } from './pages/user-main/user-main.component';
import { UserLandingComponent } from './components/user-landing/user-landing.component';

@NgModule({
  declarations: [UserMainComponent, UserLandingComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    
  ],
})
export class UserModule { }
