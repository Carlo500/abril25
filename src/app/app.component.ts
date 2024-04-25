import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { BorrarProductoComponent } from './borrar-producto/borrar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaProductoComponent,AltaProductoComponent,BorrarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril25';
}
