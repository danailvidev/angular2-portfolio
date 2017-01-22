import { Component, OnInit, Input } from '@angular/core'
import { MdDialogRef } from '@angular/material'

@Component({
    selector: 'reddit-detail',
    template: `
    
        <p>{{title}}</p>
        <p>{{score}}</p>
    `
})
export class RedditDetailComponent implements OnInit {
    @Input() title: any
    @Input() score: any

    constructor(private dialogRef: MdDialogRef<RedditDetailComponent>) {
        this.title = this.dialogRef.componentInstance
        this.score = this.dialogRef.componentInstance
    }

    ngOnInit() { }
}