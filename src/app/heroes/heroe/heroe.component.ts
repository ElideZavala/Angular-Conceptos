import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 12;

    get nombreCapitalizado() {
      return this.nombre.toUpperCase();
    }

    ObtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }
}
