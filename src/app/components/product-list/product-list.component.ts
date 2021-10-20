import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
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
  
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;
      
    });
  }

  addToCart(product: Product): void {
    product.quantity = this.quantity;
    product.amount = product.quantity * product.price;
    alert(`${product.quantity}, ${product.price}, ${product.id}, ${product.amount}`)
  }


}
