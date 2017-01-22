import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RedditApiComponent } from './reddit-api.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'redditapi', component: RedditApiComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RedditApiRoutingModule { }