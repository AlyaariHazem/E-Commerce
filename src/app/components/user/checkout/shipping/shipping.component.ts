import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent {
  shippingDetails = {
    address: '',
    city: ''
  };

  proceedToPayment() {
    console.log('Shipping Details:', this.shippingDetails);
    // Add form validation or API call here
  }
}
