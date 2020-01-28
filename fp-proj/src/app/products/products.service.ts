import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable()
export class ProductsService {

  private productsSubj = new BehaviorSubject<Product[]>([]);
  get products$() {
    return this.productsSubj.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetchProducts() {
    this.http.get<Product[]>('/api/products').subscribe(p => this.productsSubj.next(p));
  }
}
