import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService {
    empleados: Empleado[] =[
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Elias", "Orihuela", "Tecnico", 6500),
        new Empleado("Marcos", "Juares", "Operario", 5500),
        new Empleado("Tomy", "Lopez", "Oficial", 4500),
    ];

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    };

    agregarEmpleadoServicio(empleado: Empleado){

        this.servicioVentanaEmergente.muestraMensaje(`El empleado a agregar es: \n
        ${empleado.nombre} ${empleado.apellido} \n
        Salario: ${empleado.salario}`);

        this.empleados.push(empleado);
    }
};
