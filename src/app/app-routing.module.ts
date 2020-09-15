import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressCardFormComponent } from "./address-card-form/address-card-form.component";
import { AddressCardListComponent } from './address-card-list/address-card-list.component';
import { HomeComponent } from './home/home.component';
import { MyI18nComponent } from './my-i18n/my-i18n.component';
import { TwoWayDataBindingPageComponent } from './two-way-data-binding-page/two-way-data-binding-page.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'address-card-form', component:AddressCardFormComponent},
  {path:'address-card-list', component:AddressCardListComponent },
  {path:'my-i18n', component:MyI18nComponent },
  {path:'two-way-data-binding-page', component:TwoWayDataBindingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
