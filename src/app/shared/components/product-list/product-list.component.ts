import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product-model';
import { LoginComponent } from '../../../components/public/login/login.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  currentPage = 0;
  pageSize = 8;
  totalProducts = 0;
  products: Product[] = [];

  productService = inject(ProductService);

  constructor(private router: Router, private dialog: MatDialog) { }

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
    this.loadProducts();
  }
  isnotlogin(): boolean {
    const login = localStorage.getItem('login');
    return login !== 'true';
  }
  viewProduct(productId: number): void {
    if (this.isnotlogin()) {
      this.openLoginDialog();
    } else {
      this.router.navigate(['/user/product', productId]);
    }
  }
  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
      data: {}
    });
  }
}
