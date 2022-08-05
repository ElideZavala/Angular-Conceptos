import { NgModule } from "@angular/core";

import { AppComponent } from "../app.component";
import { ContadorComponet } from './contador/contador.componet';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        ContadorComponet,
    ],
    exports: [
        BrowserModule,
        ContadorComponet
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class ContadorModule {}