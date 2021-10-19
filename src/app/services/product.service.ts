import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productJson: string = './assets/data.json';
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productJson);
  }

  returnProductArray(): Product[] {
    this.getProducts().subscribe( (prod) => {
      this.products = prod;
    });

    return this.products;
  }

}
