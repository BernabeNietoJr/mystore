import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
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
  quantities: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity: number = 1;
  
  constructor( 
    private activeRouter: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService ) { 

      this.activeRouter.paramMap.subscribe((params: ParamMap) => {
        this.id  = Number(params.get('id'));
      });
    
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (prod) => {
      this.products = prod;
      this.product = this.products!.find(p => p.id === this.id) as Product;
    });
  }

  onBack(): void {
    this.router.navigate(['/'])
  }

  addToCart(product: Product): void {
    

    if (this.cartService.addToCart(product, this.quantity) === false) {
      alert(`Quantity is updated!`);
    }
    else {
      //product.quantity = this.quantity;
      //product.amount = product.quantity * product.price;
      alert(`Product Added To Cart`);
    }
    
  }


  onSelect(selectedQuantity: number){
    
    this.quantity = selectedQuantity;

  }

}
