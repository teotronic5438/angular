import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulo2';
  telefono: number = 0;
  fruta: string = 'manzana';
  verdura: string = 'lechuga';
  pi: number = 3.14159265359;
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776
  };
  helloWorld = () => {
    return "Hola mundo!"
  }
  armaduras = [
    'Mark I',
    'Mark II',
    'Mark III',
    'Mark IV',
    'Mark V',
    'Mark VI',
    'Mark XLII',
  ];
  ironman = 'Tony Stark';
  revelar_identidad = false; // cambiar por true
  usar = this.armaduras[2];
  superhero = 'Ironman';
  cambiarClase = () => {
    this.revelar_identidad = !this.revelar_identidad;
  }

  nombre: string = '';
  celular = '';
  dni: number | undefined;

  cambiarDni(valornumerico: number) {
    // Podes consultar el valor por consola
    console.log(valornumerico);
    this.dni = valornumerico;
  }

  onClick() {
    alert('Hiciste click!!');
  }

}
