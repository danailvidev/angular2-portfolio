import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsComponent } from './contacts.component'
import { ContactsRoutingModule } from './contacts.routes'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
