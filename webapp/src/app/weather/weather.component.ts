import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { WeatherApiService } from './../weather-api.service';

interface WeatherCity {
  city: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherApiService]
})
export class WeatherComponent implements OnChanges, OnInit, WeatherCity {
  @Input() city: string;
  weather;
  constructor(private api: WeatherApiService) {}
  async ngOnInit() {
    this.weather = await this.api.getWeather(this.city)
  }
  async ngOnChanges(changes: SimpleChanges) {
    this.weather = await this.api.getWeather(changes.city.currentValue);
  }
}
