import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
name:string = '';
apepa:string = '';
apema:string = '';
dia:number = 0;
mes:number = 0;
ano:number = 0;
genero:string = '';
img:string = '';
respuesta:string = '';
animal:string = '';

imprimir():void{
let signo:number = (this.ano - 4) % 12;
let edad:number = 2026 - this.ano;
let mesac:number = 10;
let diaac:number = 2;
if (mesac < this.mes || (mesac == this.mes && diaac < this.dia)) {
  edad--
}

switch (signo){
  case 11:
    this.animal = 'Cerdo';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-12.webp';
    break;
  case 0:
    this.animal = 'Rata';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-1.webp';
    break;
  case 1:
    this.animal = 'Buey';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-2.webp';
    break;
  case 2:
    this.animal = 'Tigre';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-3.webp';
    break;
  case 3:
    this.animal = 'Conejo';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-4.webp';
    break;
  case 4:
    this.animal = 'Dragon';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-5.webp';
    break;
  case 5:
    this.animal = 'Serpiente';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-6.webp';
    break;
  case 6:
    this.animal = 'Caballo';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-7.webp';
    break;
  case 7:
    this.animal = 'Cabra';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-8.webp';
    break;
  case 8:
    this.animal = 'Mono';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-9.webp';
    break;
  case 9:
    this.animal = 'Gallo';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-10.webp';
    break;
  case 10:
    this.animal = 'Perro';
    this.img = 'https://tuzodiaco.com/assets/chinese/animal-11.webp';
    break;
  default:
    this.animal = 'No identificado';
    this.img = '';
    break;
}

this.respuesta = 'Hola ' + this.name + ' ' + this.apepa + ' ' + this.apema + ' tienes ' + edad + ' años y tu signo zodiacal es ' + this.animal;

}

}
