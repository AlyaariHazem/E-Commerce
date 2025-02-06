import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  currentStep: string = 'shipping';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Detect the current step on load
    this.route.firstChild?.url.subscribe(url => {
      this.currentStep = url[0]?.path || 'shipping';
    });
  }

  navigateTo(step: string) {
    this.currentStep = step;
    this.router.navigate([step], { relativeTo: this.route });
  }
}
