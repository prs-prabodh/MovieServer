import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './modules/details/components/details/details.component';
import { MainComponent } from './modules/home/pages/main/main.component';
import { UserMainComponent } from './modules/user/pages/user-main/user-main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movie', component: DetailsComponent },
  { path: 'user', component: UserMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
