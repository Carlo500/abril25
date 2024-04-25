import { Component } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductosService } from '../_servicio/productos.service';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
productos:Producto[]=[];
constructor(private servicio:ProductosService){}
ngOnInit(): void {
  this.servicio.listar()
  .subscribe(data=> this.productos = data);
}
}
