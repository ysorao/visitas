import { Component, OnInit } from '@angular/core';
import { Visita } from './../../modelos/visitas';
import { Usuario } from './../../modelos/usuarios';
import { GlobalService } from './../../servicios/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  visitas: Visita[] = [];

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.fetchVisitas();
  }

  fetchVisitas(){
    this.globalService.getVisitas()
        .subscribe(visitas =>{
          this.visitas = visitas;
          console.log(visitas);
        });
  }

}