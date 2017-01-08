import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoogleMapComponent } from './google-map.component'
import { GoogleMapRoutingModule } from './google-map.routes'
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSFLe3ECpon846DcUx0dmrvlkJPCF0Ca8'
    })
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
