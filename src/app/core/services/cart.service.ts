import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {
    // Load initial cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  initCart(items: any[]) {
    // Overwrites the current cart with new items
    this.cart.next(items);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  addToCart(product: Product) {
    const cartItems = this.cart.value;
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    this.cart.next([...cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cart.value));
  }

  removeFromCart(productId: number) {
    let cartItems = this.cart.value;
    cartItems = cartItems.filter(item => item.id !== productId);
    this.cart.next(cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  updateQuantity(productId: number, quantity: number) {
    const cartItems = this.cart.value.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    this.cart.next(cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  getCart() {
    return this.cart.value;
  }
}
