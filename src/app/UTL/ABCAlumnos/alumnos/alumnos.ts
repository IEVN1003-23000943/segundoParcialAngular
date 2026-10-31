import { AlumnosUTL } from './../alumnosUTL';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProyectoapiService } from '../alumnosapi.service';

@Component({
  imports: [FormsModule,RouterLink,AlumnoFilterPipe,CommonModule],
  selector: 'app-alumnos',
  templateUrl: './alumnos.html',
})
export class Alumnos implements OnInit {
  listfilter:string=''
  alumnoTitle:string
  dataSource:AlumnosUTL[]=[];

  constructor(public alumnosUTL:ProyectoapiService, private router: Router){}

  alumnosIric:AlumnosUTL[]=[
    {
      matricula:1234,
      nombre:'Pedro',
      apaterno:'Lopez',
      amaterno:'Muñoz',
      correo:'pedro@gmail.com',
    }
  ]
  ngOnInit(): void {
    this.cargarAlumnos();
  }
  cargarAlumnos():void{
    this.alumnosUTL.getAlumnos().subscribe({
      next: (response: AlumnosUTL[]) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Error al consultar la API:', error)
      },
      complete: () => {
        console.log('Carga de alumnos finalizada');
      }
    });
  }
}
