import { AddCategoryitemsComponent } from './../add-categoryitems/add-categoryitems.component';
import { AddCategoriesComponent } from './../add-categories/add-categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'addcategory',component:AddCategoriesComponent},
  {path:'addcategoryitem',component:AddCategoryitemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
