import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/CreditCard';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total: number = 0;
  name: string = '';
  creditCard: CreditCard = {
    cardNumber: '',
    holderName: '',
    securityCode: 0,
    expiryDate: new Date,
};

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
  

  removeItem(product: Product): void {

    this.total = this.total - product.amount!;
    this.cartService.removeItem(product);

    if(this.items.length === 0)
      this.total = 0
    
  }

}
