import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = {
    city: 'Rennes',
    country: 'France',
    lat: 48.11,
    lon: -1.67,
    description: 'Nuageux'

  };
  constructor() { }
  ngOnInit() {}

}
