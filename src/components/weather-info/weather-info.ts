import { OpenWeatherService } from './../../services/openWeatherService';
import {Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'weather-info',
  templateUrl: 'weather-info.html'
})

@Injectable()
export class WeatherInfo {
  private url = 'http://api.openweathermap.org/data/2.5/forecast?q=Dublin&units=metric&appid=265c6a6f6256191b246b6846c8472dc8';
  private weatherData:any;

  private title:any;
  constructor (private openWeatherService:OpenWeatherService,private http:Http){
  
  }

  ngOnInit(){
    //this.title = this.openWeatherService.getWeather();
    this.http
            .get(this.url)
            .map(res => res.json())
            .subscribe(
              data => this.title = data, 
              err => this.logError(err),
              () => console.log('Random Quote Complete')
            );
    
  }
  logError(err:any) {
  console.error('There was an error: ' + err);
}  
}
