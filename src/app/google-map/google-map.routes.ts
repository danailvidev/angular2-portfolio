import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'googlemap', component: GoogleMapComponent }
    ])
  ],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule { }