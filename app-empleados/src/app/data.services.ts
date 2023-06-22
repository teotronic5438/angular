import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {
    // usamos constructor para hacer la inyeccion
    constructor(private httpClient: HttpClient){}

    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.post('https://misclientes-35bf2-default-rtdb.firebaseio.com/datos.json', empleados).subscribe({
            next: (v) => console.log(`Se ha guardado correctamente: ${v}`),
            error: (e) => console.error(e),
            complete: () => console.info('complete') 
        }

            // response => console.log("Se han guardado los empleados: " + response),

            // error => console.log("Error: " + error)
            

        );
    }
}