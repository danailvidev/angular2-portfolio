import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PrettyJsonModule } from 'angular2-prettyjson'

import { MaterialModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    PrettyJsonModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
