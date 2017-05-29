import { TestBed, inject } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherApiService]
    });
  });

  it('should be created', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return valid city', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service.getWeather().city).toBe('Rennes');
  }));

  it('should return valid country', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service.getWeather().country).toBe('France');
  }));

  it('should return valid coord', inject([WeatherApiService], (service: WeatherApiService) => {
    expect(service.getWeather().lat).toBe(48.11);
    expect(service.getWeather().lon).toBe(-1.67);
  }));
});
