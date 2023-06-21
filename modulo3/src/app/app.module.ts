import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ContratadoComponent } from './contratado/contratado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    EmpleadosComponent,
    GaleriaComponent,
    ServiciosComponent,
    ContactoComponent,
    HomeComponent,
    Pagina404Component,
    ContratadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // importamos el modulo de routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
