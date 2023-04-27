 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;  // haremos binding bi-directional
  numero2: number = 0;  // haremos binding bi-directional
  resultado: number = 0;  // haremos binding bi-directional

  sumar():void{
    this.resultado = Number(this.numero1) + Number(this.numero2) ;
  }
  restar():void{
    this.resultado = Number(this.numero1) - Number(this.numero2) ;
  }
  multiplicar():void{
    this.resultado = Number(this.numero1) * Number(this.numero2) ;
  }
  dividir():void{
    this.resultado = Number(this.numero1) / Number(this.numero2) ;
  }
}
