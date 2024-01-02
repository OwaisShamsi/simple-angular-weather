import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviornment } from 'src/enviornments/enviornment';
import { WeatherData } from '../model/weather-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(enviornment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('appid', enviornment.appId)
        .set('units', 'metric'),
    });
  }
}
