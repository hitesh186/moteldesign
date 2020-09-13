import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodandbeverageComponent } from './foodandbeverage/foodandbeverage.component';
import { RestaurantComponent } from './foodandbeverage/restaurant/restaurant.component';
import { BarComponent } from './foodandbeverage/bar/bar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessandspaComponent } from './lifestyle/wellnessandspa/wellnessandspa.component';
import { ResortComponent } from './lifestyle/resort/resort.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { WeddingsComponent } from './celebrations/weddings/weddings.component';
import { PartiesComponent } from './celebrations/parties/parties.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodandbeverageComponent,
    RestaurantComponent,
    BarComponent,
    LifestyleComponent,
    WellnessandspaComponent,
    ResortComponent,
    ExperiencesComponent,
    CelebrationsComponent,
    WeddingsComponent,
    PartiesComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
