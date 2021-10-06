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
  product: Product | undefined;
  id: number;
  
  constructor( 
    private activeRouter: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url:'',
      description:'',
      quantity:1,
    } 
    this.id = 0;
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.id  = Number(params.get('id'));
      //let prods: Product[] = [];
      this.product = this.productService.getProduct(this.id);

      // if(this.product !== undefined) {
      //   // this.product = {
      //   //   id: 0,
      //   //   name: '',
      //   //   price: 0,
      //   //   url:'',
      //   //   description:'',
      //   //   quantity:1,
      //   // } 
      // }

    });
  }

  getProductDetail(product: Product) {
    
  }

}
