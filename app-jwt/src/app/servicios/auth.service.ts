import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'https://localhost:4200/api'; // o la url que corresponda
  token: string | undefined;

  // Escribiremos el código que realiza una solicitud POST al servidor con las credenciales del usuario.
  // Aquí, hacemos una solicitud a la API. Si tiene éxito, almacenamos el token en localStorage y
  //  redirigimos al usuario a la página de perfil. El código quedaría de la siguiente forma:

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
    .subscribe((resp: any) =>{
      // redireccioanmos al usuario a su perfil
      this.router.navigate(['profile']);

      // Guardamos el token en LocalStorage
      localStorage.setItem('auth_token', resp.token);
    })
  }

  // Para cerrar sesion eliminamos el token del LocalStorage
  logout() {
    localStorage.removeItem('token');
  }

  // Un servicio para verificar si existe la sesion
  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }

}


/*
En la imagen anterior también ya dejamos definidas las funciones de inicio y cierre de sesión:

  cerrar sesión: borra el token del almacenamiento local
  logIn: devuelve una propiedad booleana que determina si un usuario está autenticado
*/