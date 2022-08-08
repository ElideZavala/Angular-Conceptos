import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Trabajar con el ngIf Y ngFor
import { MainPageComponent } from './main-page/main-page.component'



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
