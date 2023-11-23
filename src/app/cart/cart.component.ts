import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];
  totalAmount: number = 0;
  checkingOut: boolean = false;
  paymentAmount: number = 0;
  paymentSuccess: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotalAmount();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalAmount();
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateTotalAmount(): void {
    this.calculateTotalAmount();
  }

  continueShopping(): void {
    this.checkingOut = false;
    this.paymentAmount = 0;
  }

  startCheckout(): void {
    this.checkingOut = true;
  }

  completeCheckout(): void {
    if (this.paymentAmount === this.totalAmount) {
      this.paymentSuccess = true;
      const confirmContinue = confirm('Payment successful! Do you want to continue shopping?');

      if (confirmContinue) {
        this.router.navigate(['/']);
      }
    } else {
      this.paymentSuccess = false;
    }
  }
}