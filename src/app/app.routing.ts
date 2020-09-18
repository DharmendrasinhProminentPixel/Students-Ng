import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MyI18nComponent } from './page/my-i18n/my-i18n.component';
import { TwoWayDataBindingPageComponent } from './page/two-way-data-binding-page/two-way-data-binding-page.component';
import { UserFormComponent } from './page/user-form/user-form.component';
import { UserListComponent } from './page/user-list/user-list.component';


export interface MyRoute extends Route {
  /** Label to nav-bar if not given, does not display on nav-bar */
  label?: string;
}

const routes: MyRoute[] = [
  {path:'home', component:HomeComponent, label:"Dynamic HTTP"},
  {path:'user-form', component:UserFormComponent, label:"User Form"},
  {path:'user-list', component:UserListComponent, label:"User List" },
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