import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

describe('ProductDetailsComponent', () => {
  let activeRoute: ActivatedRoute
  let http: HttpClient;
  let httpTestController: HttpTestingController;
  let productService: ProductService;
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    http = TestBed.get(HttpClient);
    httpTestController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ProductDetailsComponent);
    productService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
