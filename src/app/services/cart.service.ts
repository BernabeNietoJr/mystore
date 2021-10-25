import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
//import lodash from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  //add a product to the cart
  //return false if product is already in the cart
  // true if not found in cart
  addToCart(item: Product): boolean {

    if (this.items.length === 0 ) {

      this.items.push(item);
      return true;

    }
    else {

      let retBool: boolean = this.isProductFound(this.items, item);
      
      if(retBool === true) {
        return false;
      }
      else {
        
        this.items.push(item);
        return true;

      }
      
    }

  }

  //get all product from the cart
  getItems(): Product[] {
    return this.items;
  }

  removeItem(item: Product) {
    let index:  number = this.items.indexOf(item)
    this.items.splice(index, 1)
  }

  //clear all product from the cart
  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  isProductFound(prodArr: Product[], prod: Product): boolean {

    if (prod === prodArr.find( (el) => { el.id === prod.id } ) )
      return true;
    else
      return false;
      
  }

  //isProductFound(prodArr: Product[], id: number): boolean {

    // for( let x = 0; x < this.items.length; x++) {
    //   if (prodArr[x].id = id) {
    //     return true;
    //   }
    // }
    // return false;

  //}

  getTotal(): number {

    let total: number = 0;
    let len = this.items.length;

    for (let cnt = 0; cnt < len; cnt++) {
      total = total + this.items[cnt].amount!
    }

    return total;
  }

}
