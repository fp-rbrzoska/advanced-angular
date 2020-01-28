import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.products$;
    this.productsService.fetchProducts();
  }

}
