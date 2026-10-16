import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-ventas',
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas {
  ventas: any[] = [];

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    numCompra: new FormControl(''),
    cineco: new FormControl(false),
    boletos: new FormControl('')
  });

  respuesta:string = '';
  boleper:number = 0;
  precio:number = 12;
  pago:number = 0;
  descuento:string = '';
  aplica:string = '';

  indiceEdicion:number =- 1

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(): void {
    const datos = localStorage.getItem('ventas');
    if (datos) {
      this.ventas = JSON.parse(datos);
    }
  }

  eliminarVenta(index: number):void{
    this.ventas.splice(index,1)
    localStorage.setItem(
      'ventas',
      JSON.stringify(this.ventas)
    )
  }

  pagar():void{

    let name:string = this.formulario.value.nombre;
    let compradores:number = this.formulario.value.numCompra;
    let tarjeta:boolean = this.formulario.value.cineco;
    let pases:number = this.formulario.value.boletos;

    this.boleper = compradores * 7;

    if (pases > this.boleper) {
      this.respuesta = 'No esta permitido vender mas de 7 boletos por comprador'
    } else {
      this.pago = pases * this.precio
      if (pases > 5) {
        this.pago -= this.pago * 0.15
        this.descuento = '15%'
      } else if (pases == 3 || pases == 4 || pases == 5) {
        this.pago -= this.pago * 0.1
        this.descuento = '10%'
      } else {
        this.descuento = '0%'
      }

      if (tarjeta) {
        this.pago -= this.pago * 0.1
        this.aplica = 'aplica un 10% extra'
      } else {
        this.aplica = 'no aplica'
      }

      const nuevaVenta = {
        nombre: name,
        numCompra: compradores,
        cineco: tarjeta,
        boletos: pases,
        descuento: this.descuento,
        tarjetaCineco: this.aplica,
        total: this.pago
      };

      if (this.indiceEdicion !== -1) {
        this.ventas[this.indiceEdicion] = { ...nuevaVenta }
      } else {
        this.ventas.push({ ...nuevaVenta });
      }

      localStorage.setItem('ventas', JSON.stringify(this.ventas));

      this.respuesta = 'Cliente: ' + name + ' | Boletos: ' + pases + ' | Descuento del: ' + this.descuento + ' | Tarjeta CINECO: ' + this.aplica + ' | Total a pagar: $' + this.pago

      this.indiceEdicion = -1;
    }
  }

  salir():void {

    this.formulario.reset();

    this.respuesta = '';
    this.boleper = 0;
    this.pago = 0;
    this.descuento = '';
    this.aplica = '';

    this.indiceEdicion = -1;
  }

  editarVenta(index:number):void{
    const venta = this.ventas[index]
    this.formulario.patchValue({
      nombre: venta.nombre,
      numCompra: venta.numCompra,
      cineco: venta.cineco,
      boletos: venta.boletos
    })

    this.indiceEdicion=index
  }

}
