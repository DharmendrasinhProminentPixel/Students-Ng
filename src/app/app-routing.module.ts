import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressCardListComponent } from './address-card-list/address-card-list.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { HomeComponent } from './home/home.component';
import { User } from './user.modal';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'address-card-list', component:AddressCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
