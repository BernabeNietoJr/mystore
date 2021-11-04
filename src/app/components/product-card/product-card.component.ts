import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  quantities: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity:number = 1;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url:'',
      description:'',
      quantity:1,
      amount:0,
    } 
   }

  ngOnInit(): void {
  }

  // displayProduct(product: Product) {
  //   this.getProductDetail.emit(product);
  // }

  addToCart(quantity: number): void {
    alert(`${quantity} Product added to Cart!`)
  }

}
