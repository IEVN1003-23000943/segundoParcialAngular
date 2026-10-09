import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  formulario!:FormGroup

  ngOnInit():void{
    this.formulario = new FormGroup({
      nombre:new FormControl(''),
      numCompra:new FormControl(0),
      cineco:new FormControl(''),
      materia:new FormControl(''),
    })
  }

}
