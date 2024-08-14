import { Injectable } from '@angular/core';
import { products } from '../data/products.data';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Observable<Product[]> {
    return of(products);
  }
}
