import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";

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

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices){

    };

    agregarEmpleadoServicio(empleado: Empleado){

        this.servicioVentanaEmergente.muestraMensaje(`El empleado a agregar es: \n
        ${empleado.nombre} ${empleado.apellido} \n
        Salario: ${empleado.salario}`);

        this.empleados.push(empleado);
        
        this.dataService.guardarEmpleados(this.empleados);
        
    }

    encontrarEmpleado(indice: number){
        let empleado = this.empleados[indice];

        return empleado;
    }

    actualizarEmpleado(indice: number, empleado: Empleado){
        // let empleadoModificado = this.empleados[indice];

        // empleadoModificado.nombre = empleado.nombre;
        // empleadoModificado.apellido = empleado.apellido;
        // empleadoModificado.cargo = empleado.cargo;
        // empleadoModificado.salario = empleado.salario;
        this.empleados[indice] = empleado;
    }

    eliminarEmpleado(indice: number){
        this.empleados.splice(indice, 1);
        // elimina el indice del array, un solo item
    }
};
