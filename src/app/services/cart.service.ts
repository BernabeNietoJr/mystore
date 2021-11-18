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

      if (item.quantity === 0  || item.quantity === undefined) {
        alert("Item quantity is zero, please select proper quantity!")
        return;
      }

      item.amount = item.price * item.quantity;

      let itemInCart = this.items.filter( el => el.id === item.id);

      //item found in cart so update amount & quantity
      if (itemInCart.length !== 0 ) {

        let index: number = this.items.findIndex(el => item.id === el.id)

        let newQuantity: number = Number(this.items[index].quantity!);

        newQuantity = Number(newQuantity) + (Number(item.quantity));

        if (newQuantity > 10) {
          alert('Maximum of 10 quantities per order!');
          newQuantity = 10;
        }

        this.items[index].quantity = newQuantity;
        this.items[index].amount = (this.items[index].quantity!) * (this.items[index].price!);

        console.log(`@cart service item.quantity: ${item.quantity} updated quantity: ${this.items[index].quantity} index ${index}`);

        alert('Cart updated!')

      }

      //item not found in cart to add to cart
      else {

        console.log(`@ cart service - item.quantity ${item.quantity}`)

        this.items.push(JSON.parse(JSON.stringify(item)));
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
