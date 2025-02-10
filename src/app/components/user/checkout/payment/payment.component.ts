import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentDetails = {
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  };

  proceedToReview() {
    console.log('Payment Details:', this.paymentDetails);
    // Add payment validation or API call here
  }
}
