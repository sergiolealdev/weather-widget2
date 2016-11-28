import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { InputForm } from './form.component'
import { WeatherInfo } from './components/weather-info/weather-info';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, InputForm, WeatherInfo],
  bootstrap: [WeatherInfo]
})
export class AppModule { }
