import { Component } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { CATEGORIES } from '../mock-categories'
import { LIMITS } from '../mock-limits'

@Component({
    selector: 'settings-dialog',
    templateUrl: './settings.component.html',
    styles: [`
    button {
        margin: 0 auto;
        text-align: center;
    }
    h2 {
        text-align: center;
    }
    md-select {
        width: 100%;
    }
    `]
})
export class SettingsComponent {
    categories: any = CATEGORIES
    limits: any = LIMITS
    category: any
    limit: any

    constructor(private dialogRef: MdDialogRef<SettingsComponent>) {
        this.getDefaults()
    }

    getDefaults() {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category')
        } else {
            this.category = 'popular'
        }

        if (localStorage.getItem('limit') != null) {
            this.limit = Number(localStorage.getItem('limit'))
        } else {
            this.limit = 5
        }
    }

    setDefaults() {
        localStorage.setItem('category', this.category)
        localStorage.setItem('limit', this.limit)
        this.dialogRef.close()
    }
}