import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import { Product } from '../../../core/models/product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Product[] = [];
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    // Subscribe to cart updates
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  // Increase item quantity
  increaseQty(item: Product) {
    this.cartService.updateQuantity(item.id, (item.quantity || 1) + 1);
  }

  // Decrease item quantity
  decreaseQty(item: Product) {
    const newQty = (item.quantity || 1) - 1;
    if (newQty <= 0) {
      this.cartService.removeFromCart(item.id);
    } else {
      this.cartService.updateQuantity(item.id, newQty);
    }
  }

  // Remove item completely from the cart
  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  // Calculate total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 1));
    }, 0);
  }

  // Proceed to checkout
  proceedToCheckout() {
    // You can add any necessary validation or user authentication here
    // Navigate to the checkout page
    this.router.navigate(['/user/checkout']);
  }
}
