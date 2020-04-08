import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 

    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALxzc422nOcN6SneNdaNjkTJulYlJNmv4'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
