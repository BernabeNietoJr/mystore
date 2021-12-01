import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  //quantities: number[] = [1,2,3,4,5,6,7,8,9,10];
  
  
  
  
  constructor( private productService: ProductService, public cartService: CartService ) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;  
    });

  }

  addEmittedProduct(prod: Product): void {
    this.cartService.addToCart(prod)
  }

}
