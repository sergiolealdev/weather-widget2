import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OpenWeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/forecast?q=Dublin&units=metric&appid=265c6a6f6256191b246b6846c8472dc8&callback=JSON_CALLBACK';
  private weatherData:any;

  constructor (private http:Http){
    
  }

  public getWeather(){
    
    this.http
            .get(this.url)
            .map(res => res.json())
            .subscribe(
              data => this.weatherData = data
            );
      return this.weatherData
  }
}
