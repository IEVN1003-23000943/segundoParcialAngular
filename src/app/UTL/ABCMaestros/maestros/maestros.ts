import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaestroFilterPipe } from '../maestros-filter.pipe';
import { MaestrosUTL, RespuestaMaestros } from '../maestrosUTL';
import { ProyectoapiService } from '../maestrosapi.service';

@Component({
  selector: 'app-maestros',
  standalone: true,
  imports: [FormsModule, RouterLink, MaestroFilterPipe, CommonModule],
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {
  listfilter: string = '';
  alumnoTitle: string = '';
  dataSource: MaestrosUTL[] = [];

  constructor(public maestrosUTL: ProyectoapiService) {}

  ngOnInit(): void {
    this.cargarMestros();
  }

  cargarMestros(): void {
    this.maestrosUTL.getMaestros().subscribe({
      next: (response: RespuestaMaestros) => {
        console.log('Datos recibidos del API:', response);
        // Acceso a la propiedad Maestros del JSON devuelto por Flask
        this.dataSource = response.Maestros;
      },
      error: (error) => {
        console.error('Error al consultar la API:', error);
      },
      complete: () => {
        console.log('Carga de maestros finalizada');
      }
    });
  }
}
