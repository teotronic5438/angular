import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualziaComponentComponent } from './actualzia-component/actualzia-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataServices } from './data.services';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [ // es un array de objetos, un objeto por cada ruta
  {path:'', component: HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes', component: QuienesComponentComponent},
  {path:'contacto', component: ContactoComponentComponent},
  {path:'actualiza/:id', component: ActualziaComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualziaComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // esto tambien es importante, indicandole la constante para ver las rutas
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
