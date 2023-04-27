import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aqui iria un empleado!</p>",  // para componente en linea
  styleUrls: ['./empleado.component.css']
  // styles:["p{background-color: aquamarine}"],  // para componente en linea
})
export class EmpleadoComponent implements OnInit {

  nombre = "Elias";
  apellido = "Orihuela";
  edad = 33;
  // empresa = "CKL Electronic";
  empresabinding = "Google";
  
  cambiaEmpresa(event: Event){
    this.empresabinding = (<HTMLInputElement>event.target).value
  }

  // getEdad() { return this.edad; }

  llamaEmpresa(value:string) {}

  habilitacionCuadro = false; // PROPERTY BINDING

  usuRegistrado = false;

  textoDeRegistro = "No hay nadie registrado"; // para usar en event binding

  setRegistroUsuario(){
    this.usuRegistrado = false;
  }

  setusuarioRegistrado(event : Event){    // EVENT BINDING
    // alert("El usuario se acaba de registrar");
    // this.textoDeRegistro = "El usuario se acaba de registrar";

    // alert(event.target)
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

  constructor() {};

  ngOnInit(): void {
    
  }
}
