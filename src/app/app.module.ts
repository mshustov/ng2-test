import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VillageComponent } from './village/village.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PromoComponent } from './promo/promo.component';

import { FilterResortByTag } from './pipes/by-tag';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VillageComponent,
    TemperatureComponent,
    PromoComponent,
    FilterResortByTag
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
