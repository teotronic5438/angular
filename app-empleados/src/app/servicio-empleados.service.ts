import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  
  constructor() { }
  
  // como conseguimos que este servicio cada vez que se inyecte, salga un modal
  // Una vez creado el servicio hay que registrarlo en la aplicacion (no solo crearlo)
  // lo registramos en app.module.ts en el array de providers
  // una vez que lo registramos en el array providers podemos usarlo en el componente que quieras
  muestraMensaje(mensaje: string){
    alert(mensaje);
  }
}
