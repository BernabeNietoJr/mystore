import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  //add a product to the cart
  addToCart(item: Product):void {
    this.items.push(item);
  }

  //get all product from the cart
  getItems(): Product[] {
    return this.items;
  }

  //clear all product from the cart
  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

}
