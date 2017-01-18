import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
import { GoogleMapModule } from './google-map/google-map.module'
import { HeroesModule } from './heroes/heroes.module'
import {HomeModule} from './home/home.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'

import { MaterialModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GoogleMapModule,
    HeroesModule,
    HomeModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
