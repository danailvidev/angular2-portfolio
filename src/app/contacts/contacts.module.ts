import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsComponent } from './contacts.component'
import {ContactsRoutingModule} from './contacts.routes'

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
