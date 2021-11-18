import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})

export class PaymentConfirmationComponent implements OnInit {

  clientName: string = '';
  totalPrice: number = 0;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    public cartService: CartService

    ) { 
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

        this.clientName  = (params.get('clientName'))?.toString()!;
        this.totalPrice = Number(params.get('total'));

      });
    }

  ngOnInit(): void {}
  

  onBack(): void {
    this.route.navigate(['/'])
    this.cartService.clearCart()
  }

}
