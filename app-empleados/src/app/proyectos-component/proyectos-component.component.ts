import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
  empleados: Empleado[] = [];

  // Para que funcione, tengo que injectar el servcio Router e importarlo
  constructor(private router: Router, private empleadosService: EmpleadosService){
    this.empleados = this.empleadosService.empleados;
  } 

  volverHome(){
    // uso la variale del tipo Router y uso el metodo navigate(['ruta_destino'])
    this.router.navigate(['/']);
  }

  cuadroNombre:string ="";
  cuadroApellido:string ="";
  cuadroCargo:string ="";
  cuadroSalario:number =0;

  /* METODOS DEL COMPONENTE*/
  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
    
    // recdirecciono al home
    this.volverHome();
  }


}
