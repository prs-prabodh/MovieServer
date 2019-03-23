import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movie', component: DetailsComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
