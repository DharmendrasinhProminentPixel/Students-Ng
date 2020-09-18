import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddressCardComponent } from './page/address-card/address-card.component';
import { HeaderComponent } from './header/header.component';
import { AddressCardListComponent } from './page/address-card-list/address-card-list.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { SquarePipe } from './pipe/square.pipe';
import { ResToPipe } from './pipe/res-to.pipe';
import { AddressCardFormComponent } from './page/address-card-form/address-card-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyI18nComponent } from './page/my-i18n/my-i18n.component';
import { TwoWayDataBindingPageComponent } from './page/two-way-data-binding-page/two-way-data-binding-page.component';
import { TwoWayDataBindingComponent } from './page/two-way-data-binding-page/two-way-data-binding/two-way-data-binding.component';
import { APP_ROUTING_MODULE } from './_modules/app-routing.module';
import { APP_TRANSLATE_MODULE } from './_modules/app-translate.module';

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
    AddressCardComponent,
    HeaderComponent,
    AddressCardListComponent,
    HomeComponent,
    SquarePipe,
    ResToPipe,
    AddressCardFormComponent,
    MyI18nComponent,
    TwoWayDataBindingComponent,
    TwoWayDataBindingPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
