import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ContratadoComponent } from './contratado/contratado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contratado/:id', component: ContratadoComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
