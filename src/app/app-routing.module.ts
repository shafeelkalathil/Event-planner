import { AddCategoryitemsComponent } from './admin/add-categoryitems/add-categoryitems.component';
import { AddCategoriesComponent } from './admin/add-categories/add-categories.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { BookingComponent } from './pages/booking/booking.component';
import { VenueComponent } from './pages/venue/venue.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { CateringComponent } from './pages/catering/catering.component';
import { DecarationComponent } from './pages/decaration/decaration.component';

import { HomeComponent } from './pages/home/home.component';
import { CakeComponent } from './pages/cake/cake.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'cake',component:CakeComponent},
  {path:'category',component:CategoryComponent},
  {path:'category/',component:CategoryComponent},
  {path:'catering',component:CateringComponent},
  {path:'decaration',component:DecarationComponent},
  {path:'photography',component:PhotographyComponent},
  {path:'travels',component:TravelsComponent},
  {path:'venue',component:VenueComponent},
  {path:'booking/:',component:BookingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
