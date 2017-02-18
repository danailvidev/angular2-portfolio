import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FootballApiRoutingModule } from './football-api.routes'

import {FootballApiComponent} from './football-api.component'

@NgModule({
  imports: [
    CommonModule,
    FootballApiRoutingModule
  ],
  declarations: [FootballApiComponent]
})
export class FootballApiModule { }
