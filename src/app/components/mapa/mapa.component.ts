import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat: number = 51.678481;
  lng: number = 7.809007;

  constructor(public snackBar : MatSnackBar, 
              public dialog: MatDialog) {
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }



  }

  ngOnInit() {
  }

  agregarMarcador( evento ){
    // console.log(evento.coords);
    const coords : {  lat: number, lng: number } = evento.coords;
    
    const newMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(newMarcador);
    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration:2000 } );
    // console.log(this.marcadores);
  }

  borrarMarcador(index:number){
    this.marcadores.splice(index,1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration:2000 } );
  }

  editarMarcador(marcador : Marcador) {
    // console.log('editar Marcador ', marcador);    
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, text: marcador.desc }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      console.log(result);
      
      if(result){
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
      }
      this.guardarStorage();

      this.snackBar.open('Marcador guardado correctamente!!!', 'Cerrar', { duration:2000 } );
    });

}

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
