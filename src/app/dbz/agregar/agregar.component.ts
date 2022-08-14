import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent{
  // @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // No imprimir nada si no tenemos el nombre. 
    if( this.nuevo.nombre.trim().length === 0 ) { return }

    // Emitir el nuevo personaje al padre.
    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    } 
  }

}

