import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualzia-component',
  templateUrl: './actualzia-component.component.html',
  styleUrls: ['./actualzia-component.component.css']
})
export class ActualziaComponentComponent implements OnInit {
  empleados: Empleado[] = [];
  indice: number;

  // Para que funcione, tengo que injectar el servcio Router e importarlo
  constructor(private router: Router, private empleadosService: EmpleadosService, private route: ActivatedRoute) {

  } 

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice)

    this.cuadroNombre = empleado.nombre;
    this.cuadroCargo = empleado.cargo;
    this.cuadroApellido = empleado.apellido;
    this.cuadroSalario = empleado.salario;

    // voy a pasar el valor de accion pasada por queryParms
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

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
  // actualizaEmpleado(){

  //   let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
  //   this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

  //   // recdirecciono al home
  //   this.volverHome();
  // }

  // eliminaEmpleado(){
  //   this.empleadosService.eliminarEmpleado(this.indice);

  //   // recdirecciono al home
  //   this.volverHome();
  // }

  accion: number;

  actualizaEmpleado(){

    if (this.accion == 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      this.volverHome();

    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.volverHome();
    }
    
  }
}
