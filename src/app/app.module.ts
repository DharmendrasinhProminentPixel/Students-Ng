import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { HeaderComponent } from './header/header.component';
import { AddressCardListComponent } from './address-card-list/address-card-list.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SquarePipe } from './pipe/square.pipe';
import { ResToPipe } from './pipe/res-to.pipe';
import { AddressCardFormComponent } from './address-card-form/address-card-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyI18nComponent } from './my-i18n/my-i18n.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TwoWayDataBindingPageComponent } from './two-way-data-binding-page/two-way-data-binding-page.component';

export function TranslationLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
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
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
