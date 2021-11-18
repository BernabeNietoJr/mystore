import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'confirm/:clientName/:total', component: PaymentConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
