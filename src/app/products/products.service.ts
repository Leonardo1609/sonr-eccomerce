import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getRecentProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('/assets/data/products.json')
      .pipe(map((x) => x.slice(0, 7)));
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http
      .get<Product[]>('/assets/data/products.json')
      .pipe(
        map((products: Product[]) =>
          products.filter((product: Product) => product.id === id)
        )
      );
  }

  getProductByCategory(category: number): Observable<Product[]> {
    return this.http
      .get<Product[]>('/assets/data/products.json')
      .pipe(
        map((products: Product[]) =>
          products.filter((product: Product) => product.category === category)
        )
      );
  }
}
