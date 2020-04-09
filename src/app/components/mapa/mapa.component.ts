import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat: number = 51.678481;
  lng: number = 7.809007;

  constructor() {
    const newMarcador = new Marcador(this.lat, this.lng);
    this.marcadores.push(newMarcador);
   }

  ngOnInit() {
  }

  agregarMarcador( evento ){
    // console.log(evento.coords);
    const coords : {  lat: number, lng: number } = evento.coords;
    
    const newMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(newMarcador);
    // console.log(this.marcadores);
  }

}
