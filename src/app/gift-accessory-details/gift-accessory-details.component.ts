import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { GiftAccessoryService } from '../gift-accessory.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-gift-accessory-details',
  templateUrl: './gift-accessory-details.component.html',
  styleUrls: ['./gift-accessory-details.component.css']
})
export class GiftAccessoryDetailsComponent implements OnInit{
  giftAccessory: any;
  errorLoadingGiftAccessory = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private giftAccessoryService: GiftAccessoryService
  ) {}

  ngOnInit(): void {
    const giftAccessoryId = this.route.snapshot.paramMap.get('id');
    this.loadGiftAccessoryDetails(giftAccessoryId);
  }

  loadGiftAccessoryDetails(id: string | null): void {
    this.giftAccessoryService.getGiftAccessoryById(id).subscribe(
      (giftAccessory) => {
        this.giftAccessory = giftAccessory;
      },
      (error) => {
        console.error('Error loading gift accessory details:', error);
        this.errorLoadingGiftAccessory = true;
        this.errorMessage = 'Failed to load gift accessory details. Please try again later.';
      }
    );
  }

  addToCart(): void {
    this.cartService.addToCart(this.giftAccessory);
  }
}