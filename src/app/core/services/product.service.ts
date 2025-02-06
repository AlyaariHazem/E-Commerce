// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, image: 'assets/laptop.jpeg' },
    { id: 2, name: 'Laptop', price: 1000, image: 'assets/laptop1.jpeg' },
    { id: 3, name: 'Laptop', price: 1100, image: 'assets/OIP.jpeg' },
    { id: 4, name: 'Smartphone', price: 800, image: 'assets/phone1.jpeg' },
    { id: 5, name: 'Smartphone', price: 1000, image: 'assets/phone3.jpeg' },
    { id: 6, name: 'Watch', price: 900, image: 'assets/whatch.jpeg' },
    { id: 7, name: 'Watch', price: 800, image: 'assets/whatch3.jpeg' },
    { id: 8, name: 'Watch', price: 800, image: 'assets/whatch4.jpeg' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
