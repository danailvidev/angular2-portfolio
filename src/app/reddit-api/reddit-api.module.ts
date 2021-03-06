import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RedditApiComponent } from './reddit-api.component'
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component'
import { SettingsComponent } from './settings-dialog/settings.component'
import { MaterialModule } from '@angular/material'
import { RedditApiRoutingModule } from './reddit-api.routes'
import { FormsModule } from '@angular/forms'

import { RedditService } from './services/reddit.service'

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RedditApiRoutingModule,
        FormsModule
    ],
    declarations: [
        RedditApiComponent,
        RedditDetailComponent,
        SettingsComponent
    ],
    entryComponents: [
        RedditDetailComponent,
        SettingsComponent
    ],
    providers: [RedditService]
})
export class RedditApiModule { }
