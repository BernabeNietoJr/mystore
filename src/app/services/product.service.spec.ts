import { TestBed } from '@angular/core/testing';
import { Product } from '../models/Product';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProductService } from './product.service';


describe('ProductService', () => {
  let service: ProductService;
  let prod: Product = {
    id: 3,
    name: "Backpack",
    price: 79.99,
    url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Carry things around town!",
    quantity: 0,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return the product with the specified ID', () =>{
    expect(service.getProduct(3)).toBe(prod)
  });
});
