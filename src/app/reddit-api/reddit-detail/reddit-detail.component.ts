import { Component, OnInit, Input } from '@angular/core'
import { MdDialogRef } from '@angular/material'

@Component({
    selector: 'reddit-detail',
    template: `
        <img src="{{imageUrl}}" style="max-height: 200px;">
        <p>{{title}}</p>
        <p>{{score}}</p>
        <a md-raised-button href="http://reddit.com{{permalink}}" target="_blank">VIEW ON REDDIT</a>
    `
})
export class RedditDetailComponent implements OnInit {
    @Input() title: any
    @Input() score: any
    @Input() permalink: any
    @Input() imageUrl: any

    constructor(private dialogRef: MdDialogRef<RedditDetailComponent>) {
        this.title = this.dialogRef.componentInstance
        this.score = this.dialogRef.componentInstance
        this.permalink = this.dialogRef.componentInstance
        this.imageUrl = this.dialogRef.componentInstance
    }

    ngOnInit() { }
}