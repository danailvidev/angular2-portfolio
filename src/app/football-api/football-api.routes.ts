import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FootballApiComponent } from './football-api.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'footballapi', component: FootballApiComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FootballApiRoutingModule { }