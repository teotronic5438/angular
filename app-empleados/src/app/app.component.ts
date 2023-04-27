import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] =[
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Elias", "Orihuela", "Tecnico", 6500),
    new Empleado("Marcos", "Juares", "Operario", 5500),
    new Empleado("Tomy", "Lopez", "Oficial", 4500),
  ];
}
