import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  // @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }
  // La función addNewItem() usa @Output(), newItemEvent, para generar un evento con el valor que 
  // el usuario ingresa en <input>.
}

/*
@Output()= A decorator function marking the property as a way for data to go from the child to the parent.
@Output()= Una función de decorador que marca la propiedad como una forma de que los datos pasen del 
            elemento hijo al elemento padre.

newItemEvent= The name of the @Output(). 
newItemEvent= El nombre de @Output(), lo podemos cambiar y usar el nombre que queramos.

EventEmitter<string>= The @Output()'s type.
EventEmitter<string>= El tipo de @Output(). El flujo de datos sera de  tipo string

new EventEmitter<string>()=	Tells Angular to create a new event emitter and that the data it emits is of type string.
new EventEmitter<string>()= Le dice a Angular que cree un nuevo emisor de eventos y que los datos que emite 
                            sean de tipo cadena o string.

*/