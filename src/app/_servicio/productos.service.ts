import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../_modelo/Producto';
import { entorno } from '../_entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url:string=`${entorno.HOST}/producto`;
  productoCambio=new Subject<Producto[]>();

  listar():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  alta(e:Producto){
    console.log('a llegado al servicio'+e.product_name)
    return this.http.post(this.url,e);
  }

  baja(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  constructor(private http:HttpClient) { }
}
