import { TestBed } from '@angular/core/testing';
import { Product } from '../models/Product';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProductService } from './product.service';


describe('ProductService', () => {
  let service: ProductService;
  let http: HttpClient;
  let httpTestController: HttpTestingController;
  let prod: Product;

  beforeEach(() => {

    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    http = TestBed.get(HttpClient);
    httpTestController = TestBed.get(HttpTestingController);

    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return an Array of Product', () =>{
    expect(service.getProducts()).toBeTruthy()
  });
});
