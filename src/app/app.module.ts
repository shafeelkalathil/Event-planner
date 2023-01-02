import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CateringComponent } from './pages/catering/catering.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { CakeComponent } from './pages/cake/cake.component';
import { VenueComponent } from './pages/venue/venue.component';
import { DecarationComponent } from './pages/decaration/decaration.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoriesComponent } from './admin/add-categories/add-categories.component';
import { AddCategoryitemsComponent } from './admin/add-categoryitems/add-categoryitems.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    CateringComponent,
    PhotographyComponent,
    TravelsComponent,
    CakeComponent,
    VenueComponent,
    DecarationComponent,
    BookingComponent,
    LoginComponent,
    RegisterComponent,
    AddCategoriesComponent,
    AddCategoryitemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
