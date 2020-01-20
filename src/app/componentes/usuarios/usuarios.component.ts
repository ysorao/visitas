import { Visita } from './../../modelos/visitas';
import { Usuario } from './../../modelos/usuarios';
import { GlobalService } from './../../servicios/global.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios:  Usuario[] = [];

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.fetchUsuarios();
  }

  fetchUsuarios(){
    this.globalService.getUsers()
        .subscribe(usuarios =>{
          this.usuarios = usuarios;
          console.log(usuarios);
        });
  }

}