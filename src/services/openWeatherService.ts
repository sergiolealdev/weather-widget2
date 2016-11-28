import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatheOpenWeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/forecast?q=Dublin&units=metric&appid=265c6a6f6256191b246b6846c8472dc8&callback=JSON_CALLBACK';
  constructor (private http:Http){
    
  }
  public getWeather(){
    return this.http
            .get(this.url)
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
