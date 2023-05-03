import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }

// para crear modulo contenedor de componentes en archivo raiz

// ng generate module components/components --flat  // el --flat para crear sin carpeta

// ng g m components/components --flat    // su forma abreviada