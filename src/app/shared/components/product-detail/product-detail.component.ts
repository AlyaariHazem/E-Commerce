import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product-model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  productList: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.loadProductById(id);
    });
  }

  loadProductById(id: number): void {
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
      this.product = products.find(prod => prod.id === id);
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      // Use MatSnackBar instead of alert
      this.snackBar.open(`${this.product.name} added to cart!`, 'Close', {
        duration: 3000, // duration in milliseconds
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToNextProduct(): void {
    if (this.product) {
      const currentIndex = this.productList.findIndex(prod => prod.id === this.product!.id);
      const nextProduct = this.productList[(currentIndex + 1) % this.productList.length];
      this.router.navigate(['/user/product', nextProduct.id]);
    }
  }

  goToPreviousProduct(): void {
    if (this.product) {
      const currentIndex = this.productList.findIndex(prod => prod.id === this.product!.id);
      const prevProduct = this.productList[(currentIndex - 1 + this.productList.length) % this.productList.length];
      this.router.navigate(['/user/product', prevProduct.id]);
    }
  }
}
