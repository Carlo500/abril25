import { Component, Input } from '@angular/core';
import { ProductosService } from '../_servicio/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './borrar-producto.component.html',
  styleUrl: './borrar-producto.component.css'
})
export class BorrarProductoComponent {
  constructor(private servicio:ProductosService) { }
  id:number=0;
  deleteItem() {
    console.log("hemos entrado "+this.id);
    this.servicio.baja(this.id).subscribe();
}
}
