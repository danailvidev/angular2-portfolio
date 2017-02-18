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
  stats: number = 0
  limit: number
  category: string

  categories = [
    { value: 'news', viewValue: 'News' },
    { value: 'gaming', viewValue: 'Gaming' },
    { value: 'movies', viewValue: 'Movies' },
    { value: 'worldnews', viewValue: 'World News' },
    { value: 'funny', viewValue: 'Funny' },
    { value: 'popular', viewValue: 'Popular' }
  ]

  constructor(private redditService: RedditService, private dialog: MdDialog) {
    this.getDefaults()
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit)
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit)
      .subscribe(res => {
        console.log('items', res)
        this.items = res.data.children
      })
  }

  getDefaults() {
    this.category = 'popular'
    this.limit = 5
  }

  changeCategory() {
    this.getPosts(this.category, this.limit)
  }

  view(item) {
    console.log(item.permalink)
    let dialogRef = this.dialog.open(RedditDetailComponent)
    dialogRef.componentInstance.title = item.title
    dialogRef.componentInstance.score = item.score
    dialogRef.componentInstance.permalink = item.permalink
    dialogRef.componentInstance.imageUrl = item.preview.images[0].source.url
    dialogRef.afterClosed().subscribe(result => {
      this.stats++
    })
  }

  openSettingsDialog() {
    //let settingsDialogRef = this.dialog.open(SettingsDialog);
    // settingsDialogRef.afterClosed().subscribe(result => {
    //   console.log("working")
    //   //this.selectedOption = result;
    // });
  }

}
