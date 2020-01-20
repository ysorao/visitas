import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VisitasComponent } from './componentes/visitas/visitas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    NavbarComponent,
    VisitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
