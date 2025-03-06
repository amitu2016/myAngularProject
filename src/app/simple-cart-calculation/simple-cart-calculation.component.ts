import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-cart-calculation',
  imports: [FormsModule],
  templateUrl: './simple-cart-calculation.component.html',
  styleUrl: './simple-cart-calculation.component.css'
})
export class SimpleCartCalculationComponent {
  quantity: number = 1;
  pricePerItem: number = 100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem;
  }
}
