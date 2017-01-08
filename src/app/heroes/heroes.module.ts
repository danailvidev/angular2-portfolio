import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroService } from './services/hero.service';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeroesComponent } from './heroes.component'

import { HeroesRoutingModule } from './heroes.routes'

@NgModule({
  declarations: [
    DashboardComponent,
    HeroDetailComponent,
    HeroComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesRoutingModule

  ],
  providers: [HeroService],
})
export class HeroesModule { }
