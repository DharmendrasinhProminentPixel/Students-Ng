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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressCardFormComponent } from './address-card-form/address-card-form.component';

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
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
