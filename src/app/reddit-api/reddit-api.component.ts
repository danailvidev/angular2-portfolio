import { Component, OnInit } from '@angular/core'
import { RedditService } from './services/reddit.service'
import { MdDialog, MdDialogRef } from '@angular/material'
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component'
import { SettingsComponent } from './settings-dialog/settings.component'
import { CATEGORIES } from './mock-categories'

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
  categories = CATEGORIES

  constructor(private redditService: RedditService, private dialog: MdDialog) {
    this.getDefaults()
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit)
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit)
      .subscribe(res => {
        this.items = res.data.children
      })
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

  changeCategory() {
    this.getPosts(this.category, this.limit)
  }

  view(item) {
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
    let settingsDialogRef = this.dialog.open(SettingsComponent)
  }
}
