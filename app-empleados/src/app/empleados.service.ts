import { Empleado } from "./empleado.model";

export class EmpleadosService {
    empleados: Empleado[] =[
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Elias", "Orihuela", "Tecnico", 6500),
        new Empleado("Marcos", "Juares", "Operario", 5500),
        new Empleado("Tomy", "Lopez", "Oficial", 4500),
    ];

    agregarEmpleadoServicio(empleado: Empleado){
        this.empleados.push(empleado);
    }
};
