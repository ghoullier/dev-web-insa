import { Component, OnInit } from '@angular/core';

import { WeatherApiService } from './../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherApiService]
})
export class WeatherComponent implements OnInit {
  weather;
  constructor(private api: WeatherApiService) {}
  async ngOnInit() {
    this.weather = await this.api.getWeather()
  }
}
