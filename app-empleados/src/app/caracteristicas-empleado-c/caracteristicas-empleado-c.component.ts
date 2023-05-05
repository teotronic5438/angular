import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  // @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // Ahora hago disponible el servicio para el componente hijo
  // En el constructo creo una variable private del tipo servicio(se importo el servicio ts)
  // datos y tareas comunes con esos datos, lo modularizamos en un servicio.
  // Pasos: Servicio se crea, lo registras en la app, se inyecta en los component que lo necesiten
  constructor(private miServicio: ServicioEmpleadosService){}

  agregaCaracteristicas(value: string) {  // hace el flujo de datos de lanzar la info al padre
    this.miServicio.muestraMensaje(`Su nueva caracteristica es: ${value}`);
    this.caracteristicasEmpleados.emit(value);
  }
  // La función addNewItem() usa @Output(), newItemEvent, para generar un evento con el valor que 
  // el usuario ingresa en <input>.
}