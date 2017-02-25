import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  ngOnInit() {
  }
  //packages: Object

  constructor(private http: Http) {
    //this.packages = this.getFriends()
  }

  // getFriends() {
  //   return this.http.request('./assets/packages.json')
  //     .subscribe(res => this.packages = res.json())
  // }
}
