import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavBarComponent,
    CartComponent,
    ProductCardComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
