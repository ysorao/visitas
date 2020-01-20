import { VisitasComponent } from './componentes/visitas/visitas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'visitas', component: VisitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
