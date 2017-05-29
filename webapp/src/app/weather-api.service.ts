import { Injectable } from '@angular/core';

@Injectable()
export class WeatherApiService {

  constructor() { }

  getWeather() {
    return {
      city: 'Rennes',
      country: 'France',
      lat: 48.11,
      lon: -1.67,
      description: 'Nuageux'
    };
  }

}
