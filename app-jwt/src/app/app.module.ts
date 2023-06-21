import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { AuthService } from './servicios/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarseComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
