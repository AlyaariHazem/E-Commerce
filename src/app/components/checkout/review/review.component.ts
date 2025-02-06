import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  shippingAddress = 'Alsnynah, Sana\'a, Yemen';
  paymentMethod = 'Credit Card ending in 2026';

  confirmOrder() {
    console.log('Order Confirmed!');
    // Add order confirmation logic here
  }
}
