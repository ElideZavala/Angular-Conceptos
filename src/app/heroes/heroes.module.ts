import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // Las declaraciones dicen que cosas contiene el modulo.
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    // Los inports solo son los modulos
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}