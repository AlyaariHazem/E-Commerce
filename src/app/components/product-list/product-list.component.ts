import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product-model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatCardModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  currentPage = 0;
  pageSize = 8; // Number of items per page
  totalProducts = 0;
  products: Product[] = []; // Fixed typo from prodaucts to products

  productService = inject(ProductService);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.totalProducts = products.length;
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.products = products.slice(startIndex, endIndex);
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts(); // Reload products based on the current page
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
