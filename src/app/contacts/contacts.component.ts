import { Component, OnInit } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Form } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactDetail = {
    name: "",
    email: "",
    message: ""
  }
  constructor(private http: Http) { }

  ngOnInit() {
  }

  sendMail() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    let options = new RequestOptions({ headers: headers })
    let body =
      "name=" + encodeURIComponent(this.contactDetail.name) +
      "&email=" + encodeURIComponent(this.contactDetail.email) +
      "&message=" + encodeURIComponent(this.contactDetail.message)
    this.http.post("http://webadventure.eu/mailer.php", body, options)
      .subscribe(
      () => { alert("Thank You! Your message has been sent.") }, //For Success Response
      err => { console.error(err) } //For Error Response
      );
  }
}
