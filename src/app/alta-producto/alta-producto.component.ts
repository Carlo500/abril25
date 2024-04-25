import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../_servicio/productos.service';
import { Producto } from '../_modelo/Producto';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  product_id:number=0;
  product_name:string="";
  supplier_id:number=0;
  category_id:number=0;
  quantity_per_unit:number=0;
  unit_price:number=0;
  units_in_stock:number=0;
  units_on_order:number=0;
  reorder_level:number=0;
  discount:number=0;
  constructor(private servicio:ProductosService){}
  productoN:Producto={
    product_id:this.product_id,
        product_name:this.product_name,
        supplier_id:this.supplier_id,
        category_id:this.category_id,
        quantity_per_unit:this.quantity_per_unit,
        unit_price:this.unit_price,
        units_in_stock:this.units_in_stock,
        units_on_order:this.units_on_order,
        reorder_level:this.reorder_level,
        discount:this.discount

  };
  anadirProducto():void{
    this.productoN=
      {product_id:this.product_id,
        product_name:this.product_name,
        supplier_id:this.supplier_id,
        category_id:this.category_id,
        quantity_per_unit:this.quantity_per_unit,
        unit_price:this.unit_price,
        units_in_stock:this.units_in_stock,
        units_on_order:this.units_on_order,
        reorder_level:this.reorder_level,
        discount:this.discount};
    this.servicio.alta(this.productoN)
    .subscribe();
  }

}
