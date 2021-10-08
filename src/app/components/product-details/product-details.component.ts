import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url:'',
    description:'',
    quantity:1,
  } ;
  id: number = 0;
  products: Product[] = [];
  
  constructor( 
    private activeRouter: ActivatedRoute,
    private productService: ProductService ) { 

      this.activeRouter.paramMap.subscribe((params: ParamMap) => {
        this.id  = Number(params.get('id'));
        //this.product = this.productService.getProduct(this.id) as Product;
      });
    
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;
      this.product = this.products!.find(p => p.id === this.id) as Product;
    });

  }

}
