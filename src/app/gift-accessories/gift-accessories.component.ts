import { Component,OnInit } from '@angular/core';
import { GiftAccessoryService } from '../gift-accessory.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-gift-accessories',
  templateUrl: './gift-accessories.component.html',
  styleUrls: ['./gift-accessories.component.css']
})
export class GiftAccessoriesComponent implements OnInit{
  giftAccessories: any[] = [];
  errorLoadingGiftAccessories = false;
  errorMessage = '';

  constructor(private giftAccessoryService: GiftAccessoryService,private cartService: CartService) { }

  ngOnInit(): void {
    this.loadGiftAccessories();
  }

  loadGiftAccessories(): void {
    this.giftAccessoryService.getAllGiftAccessories().subscribe(
      giftAccessories => {
        this.giftAccessories = giftAccessories;
      },
      error => {
        console.error('Error loading gift accessories:', error);
        this.errorLoadingGiftAccessories = true;
        this.errorMessage = 'Failed to load gift accessories. Please try again later.';
      }
    );
  }

  addToCart(giftAccessory: any): void {
    this.cartService.addToCart(giftAccessory);
    console.log('Added to cart:', giftAccessory);
  }
}
