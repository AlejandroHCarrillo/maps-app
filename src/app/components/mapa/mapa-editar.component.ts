import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styles: []
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;
  
  constructor( public fb:FormBuilder,
    public input: MatInputModule,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('data:', data);
      
        this.forma = fb.group ({
          'titulo': data.titulo,
          'desc': data.text
        })
     }
  

  ngOnInit() {
  }

  guardarCambios(){
    // console.log('Guardar cambios');
    // console.log(this.forma.value);
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
