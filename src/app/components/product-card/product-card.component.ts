import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() addCartItemEvent: EventEmitter<Product> = new EventEmitter();
  products: Product[] = [];
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

  ngOnInit(): void {}
  

  addItemToCart(prod: Product): void {
    this.addCartItemEvent.emit(prod);
  }

}
