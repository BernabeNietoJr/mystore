import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  //@Output() getProductDetail: EventEmitter<Product> = new EventEmitter;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url:'',
      description:'',
      quantity:1,
    } 
   }

  ngOnInit(): void {
  }

  // displayProduct(product: Product) {
  //   this.getProductDetail.emit(product);
  // }

}
