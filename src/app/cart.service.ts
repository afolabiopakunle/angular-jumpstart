import { Injectable } from '@angular/core';

import { Product } from './products'

@Injectable()
export class CartService {

  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product)
  }
}