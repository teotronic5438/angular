import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
  // defino la variable que viene del padre, que es tipo Empleado (class)
  // @Input() empleadosLista: Empleado[]; 
  @Input() empleadosDeLista: Empleado;
  @Input() indice:number;

  empleados: Empleado[] =[
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Elias", "Orihuela", "Tecnico", 6500),
    new Empleado("Marcos", "Juares", "Operario", 5500),
    new Empleado("Tomy", "Lopez", "Oficial", 4500),
  ];

  empleadoAgregado(empleado: Empleado){
    this.empleados.push(empleado);
  }

  arrayCaracteristicas: Array<string> = [];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
