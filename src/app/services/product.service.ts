import { Injectable } from '@angular/core';
import { products } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll() {
    return products;
  }
}
