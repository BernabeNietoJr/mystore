import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/CreditCard';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total: number = 0;
  name: string = '';
 //@Output() clientName: string = '';
  //@Input() totalPrice: number = 0;
  
  
  creditCard: CreditCard = {
    cardNumber: '',
    holderName: '',
    securityCode: 0,
    expiryDate: '',
};

  constructor(

    public cartService: CartService,
    private router: Router
    
    ) { }

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

  isResetForm() {
    //creditCardForm 
    //alert("Form Reset")
  }

  payItem() {
    //alert('Successfully paid item(s)')
    // this.clientName = this.creditCard.holderName;
    // this.totalPrice = this.total
    this.router.navigate(['/confirm', this.creditCard.holderName, this.total ])
  }

}
