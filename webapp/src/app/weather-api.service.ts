import { Injectable } from '@angular/core';

@Injectable()
export class WeatherApiService {

  constructor() { }

  async getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Rennes,fr&appid=e7a7e42f9288170a490c5fca2d91f5df`;
    return fetch(url).then((response) => response.json())
  }

}
