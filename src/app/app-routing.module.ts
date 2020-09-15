import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressCardFormComponent } from "./address-card-form/address-card-form.component";
import { AddressCardListComponent } from './address-card-list/address-card-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'address-card-form', component:AddressCardFormComponent},
  {path:'address-card-list', component:AddressCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
