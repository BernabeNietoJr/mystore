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
  quantities: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity: number = 1;
  product: Product;
  
  
  
  constructor(private productService: ProductService, private cartService: CartService) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
      amount: 0,
    }
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;  
    });

  }

  addToCart(product: Product): void {

   
    if(product.quantity === 0 || product.quantity === undefined) {
      alert('Quantity is zero, please select number of item')
      return;
    }

    //product.quantity = this.quantity;
    product.amount = product.price * product.quantity!;
    
    console.log(`@product list ${product.quantity}`);

    this.cartService.addToCart(product);

    this.quantity = 0;

  }

  onSelect(selectedQuantity: number){
    //alert(selectedQuantity)
    this.quantity = selectedQuantity;
    console.log(`this.quantity: ${this.quantity}, selectedQuantity ${selectedQuantity}`)

  }


}
