import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  // @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {  // hace el flujo de datos de lanzar la info al padre
    this.caracteristicasEmpleados.emit(value);
  }
  // La función addNewItem() usa @Output(), newItemEvent, para generar un evento con el valor que 
  // el usuario ingresa en <input>.
}