import { Component, Input, OnInit } from '@angular/core';
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
  quantities: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity: number = 1;
  //@Input() product!: Product;
  
  
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;  
    });

    //this.cartService.addToCart(this.product);

  }

  addToCart(product: Product): void {
    
    if (this.cartService.addToCart(product) === false) {
      alert(`Quantity is  updated!`);
    }
    else {
      product.quantity = this.quantity;
      product.amount = product.quantity * product.price;
      alert(`Product Added To Cart`);
    }  
  }

  changeQuantity(numberToAdd: number){

    this.quantity = numberToAdd

  }


}
