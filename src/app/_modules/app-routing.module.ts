import { Route, RouterModule } from '@angular/router';
import { AddressCardFormComponent } from '../page/address-card-form/address-card-form.component';
import { AddressCardListComponent } from '../page/address-card-list/address-card-list.component';
import { HomeComponent } from '../page/home/home.component';
import { MyI18nComponent } from '../page/my-i18n/my-i18n.component';
import { TwoWayDataBindingPageComponent } from '../page/two-way-data-binding-page/two-way-data-binding-page.component';


export interface MyRoute extends Route {
  /** Label to nav-bar if not given, does not display on nav-bar */
  label?: string;
}

const routes: MyRoute[] = [
  {path:'home', component:HomeComponent, label:"Dynamic HTTP"},
  {path:'address-card-form', component:AddressCardFormComponent, label:"Address Card Form"},
  {path:'address-card-list', component:AddressCardListComponent, label:"Address Card List" },
  {path:'my-i18n', component:MyI18nComponent, label:"I18N" },
  {path:'two-way-data-binding-page', component:TwoWayDataBindingPageComponent, label: "2 Way Data Binding" },

  // otherwise redirect to home
  {path:'**', redirectTo:'home'}
];

export const APP_ROUTING_MODULE = RouterModule.forRoot(routes);
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/