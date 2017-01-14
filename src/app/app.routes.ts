import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: HomeComponent },

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }