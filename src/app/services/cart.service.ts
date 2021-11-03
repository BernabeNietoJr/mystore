import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  //quantity: number = 1;

  constructor() { }


  addToCart(item: Product): void {

    // let cartSize: number = this.items.length;

    // if (cartSize === 0) {
    //   console.log(`cart service - item.quantity ${item.quantity}`)

    //   this.items.push(item);
    //   alert('Item added to cart!')

    // }
    // else {

      let itemInCart = this.items.filter( el => el.id === item.id);

      //item found in cart so update amount & quantity
      if (itemInCart.length !== 0 ) {

        let index: number = this.items.findIndex(el => item.id === el.id)
        let newQuantity: number = 0

        newQuantity = Number(this.items[index].quantity) + Number(item.quantity);

        this.items[index].quantity = newQuantity;
        this.items[index].amount = (this.items[index].quantity!) * (this.items[index].price!);

        console.log(`@cart service item.quantity: ${item.quantity} updated quantity: ${this.items[index].quantity} index ${index}`);

         newQuantity = 0;

        alert('Cart updated!')
      }
      else {
        console.log(`@ cart service - item.quantity ${item.quantity}`)

        this.items.push(item);
        alert('Item added to cart!')

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

  // isProductFound(prodArr: Product[], prod: Product): boolean {

  //   if (prod === prodArr.find( (el) => { el.id === prod.id } ) )
  //     return true;
  //   else
  //     return false;

  // }


  getTotal(): number {

    let total: number = 0;
    let len = this.items.length;

    for (let cnt = 0; cnt < len; cnt++) {
      total = total + this.items[cnt].amount!
    }

    return total;
  }

  getUpdatedQuantity(pastNumber:number, presentNumber:  number): number {
    return (pastNumber + presentNumber)
  }

}
