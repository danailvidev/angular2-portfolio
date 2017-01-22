import { Component, OnInit } from '@angular/core'
import { RedditService } from './services/reddit.service'
import { MdDialog, MdDialogRef } from '@angular/material'
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component'

@Component({
  selector: 'app-reddit-api',
  templateUrl: './reddit-api.component.html',
  styleUrls: ['./reddit-api.component.scss']
})
export class RedditApiComponent implements OnInit {
  items: any
  title: any

  constructor(private redditService: RedditService, private dialog: MdDialog) { }

  ngOnInit() {
    this.getPosts('sports', 5)
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit)
      .subscribe(res => {
        console.log('items', res)
        this.items = res.data.children
      })
  }

  view(item) {
    //console.log(item.name)
    let dialogRef = this.dialog.open(RedditDetailComponent)
    dialogRef.componentInstance.title = item.author
    dialogRef.componentInstance.score = item.score

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result)
    // });
  }
}
