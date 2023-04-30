import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  saludo = "Alumnos de #YoProgramo"
  mensaje = "";
  registrado = false; // booleana para que funcione directiva de estructura *ngIf
  nombre:string = "";
  apellido:string = "";
  cargo: string = "";

  // para usar para ngFor, defino una entrada array pero se carga desde el constructor
  // entradas: object[];
  entradas:Array<{titulo:string}>   // varia en el video por sintaxis actualizada
  // entradas: any[];               // varia en el video por sintaxis actualizada
  
  constructor() {
    this.entradas = [
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente desde hace mas de 20 años"},
      {titulo: "Javascript presente cada vez mas funcional"},
      {titulo: "Kotlin potencia para tus apps"},
      {titulo: "¿Donde quedo pascal?"},
    ];
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito";
  }
}
