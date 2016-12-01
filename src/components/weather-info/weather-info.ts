import { OpenWeatherService } from './../../services/openWeatherService';
import {Component} from '@angular/core';

@Component({
  selector: 'weather-info',
  templateUrl: 'weather-info.html'
})

export class WeatherInfo {

  private title:any;
  constructor (private openWeatherService:OpenWeatherService){
  
  }

  ngOnInit(){
    this.title = this.openWeatherService.getWeather();
    console.log(this.title);
  }
  
}
