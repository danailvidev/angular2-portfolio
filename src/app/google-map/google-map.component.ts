import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  title: string = 'Google Maps Project'
  //Varna
  lat: number = 43.204666
  lng: number = 27.910543
  zoom: number = 8
  constructor() {}

  ngOnInit() {}

}
