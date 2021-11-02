import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  //add a product to the cart
  //return false if product is already in the cart
  // true if not found in cart
  addToCart(item: Product, quantity: number): boolean {

    item.quantity = quantity;
    item.amount = item.price * item.quantity;

    if (this.items.length === 0 ) {

      this.items.push(item);
      console.log(`0 length quantity: ${item.quantity}`);
      return true;

    }
    else {

      let isProduct = this.items.filter( el => el.id === item.id);

      if(isProduct.length !== 0) {

        let index = this.items.findIndex(el => item.id === el.id)
        this.items[index].quantity = Number(this.items[index].quantity)  +  Number(item.quantity!);
        console.log(this.items[index].quantity + " + index: " + index);
        return false;

      }
      else {
        
        this.items.push(item);
        console.log("quantity: "+ item.quantity?.toString());
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


  getTotal(): number {

    let total: number = 0;
    let len = this.items.length;

    for (let cnt = 0; cnt < len; cnt++) {
      total = total + this.items[cnt].amount!
    }

    return total;
  }

}
