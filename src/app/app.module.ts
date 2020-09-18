import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { SquarePipe } from './_pipes/square.pipe';
import { ResToPipe } from './_pipes/res-to.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyI18nComponent } from './page/my-i18n/my-i18n.component';
import { TwoWayDataBindingPageComponent } from './page/two-way-data-binding-page/two-way-data-binding-page.component';
import { TwoWayDataBindingComponent } from './page/two-way-data-binding-page/two-way-data-binding/two-way-data-binding.component';
import { APP_TRANSLATE_MODULE } from './_modules/app-translate.module';
import { APP_ROUTING_MODULE } from './app.routing';
import { UserCardComponent } from './_components/user-card/user-card.component';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserFormComponent } from './page/user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING_MODULE,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_TRANSLATE_MODULE
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    SquarePipe,
    ResToPipe,
    MyI18nComponent,
    TwoWayDataBindingComponent,
    TwoWayDataBindingPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
