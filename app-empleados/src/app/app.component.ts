import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  // Borramos empleados porque ahora tomara los datos desde el servicio
  // empleados: Empleado[] =[
  //   new Empleado("Juan", "Diaz", "Presidente", 7500),
  //   new Empleado("Elias", "Orihuela", "Tecnico", 6500),
  //   new Empleado("Marcos", "Juares", "Operario", 5500),
  //   new Empleado("Tomy", "Lopez", "Oficial", 4500),
  // ];

  // Creo un arrat vacio para que la informacion del servicio que consulto se almacene en algun lado
  empleados: Empleado[] = [];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
    // Ahira antes de cargar al array hago uso del servicio llamado la ropiedad del constructor
    this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre} ${miEmpleado.apellido}`);
    
    // en ves del push llamo al metodo que creamos en el servicioEmpleado
    // Pero antes debemos inyectar el servicio dataService (el segundo)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }

  cuadroNombre:string ="";
  cuadroApellido:string ="";
  cuadroCargo:string ="";
  cuadroSalario:number =0;

  // La inyeccion de un servicio se hace a traves del constructor o a partir del constructor
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService: EmpleadosService){
    // Ahora en el array vacio empleados, lo cargo con la info del servicio empleados
    this.empleados = this.empleadosService.empleados;
    // Con eso cargo o inyecto la informacion desde el servicio DataService
  }
}
