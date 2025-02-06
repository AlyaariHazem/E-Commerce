import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product-model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
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
    private cartService: CartService
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
      alert(`${this.product.name} added to cart!`);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToNextProduct(): void {
    if (this.product) {
      const currentIndex = this.productList.findIndex(prod => prod.id === this.product!.id);
      const nextProduct = this.productList[(currentIndex + 1) % this.productList.length];
      this.router.navigate(['/product', nextProduct.id]);
    }
  }

  goToPreviousProduct(): void {
    if (this.product) {
      const currentIndex = this.productList.findIndex(prod => prod.id === this.product!.id);
      const prevProduct = this.productList[(currentIndex - 1 + this.productList.length) % this.productList.length];
      this.router.navigate(['/product', prevProduct.id]);
    }
  }
}
