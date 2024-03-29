import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 12;

    get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
    }

    ObtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarNombre(): void {
      this.nombre = 'Spiderman'
    }

    cambiarEdad(): void {
      console.log('hey....');
      this.edad = 20
    }

}
