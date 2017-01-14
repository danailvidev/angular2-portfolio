import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PrettyJsonModule } from 'angular2-prettyjson'


@NgModule({
  imports: [
    CommonModule,
    PrettyJsonModule,

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
