import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DetailsComponent } from './modules/details/components/details/details.component';
import { MainComponent } from './modules/home/pages/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NumberAbstracter } from './shared/pipes/number-abstracter.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { Spacer } from './shared/pipes/space.pipe';
import { LandingComponent } from './modules/home/components/landing/landing.component';
import { UserMainComponent } from './modules/user/pages/user-main/user-main.component';
import { UserLandingComponent } from './modules/user/components/user-landing/user-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsComponent,
    MainComponent,
    NumberAbstracter,
    Spacer,
    LandingComponent,
    UserMainComponent,
    UserLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
