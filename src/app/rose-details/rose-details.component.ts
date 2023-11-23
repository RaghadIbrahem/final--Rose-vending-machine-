import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoseService } from '../rose.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-rose-details',
  templateUrl: './rose-details.component.html',
  styleUrls: ['./rose-details.component.css']
})
export class RoseDetailsComponent implements OnInit{
  rose: any; 
  errorLoadingRose = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private roseService: RoseService) {}

  ngOnInit(): void {
    const roseId = this.route.snapshot.paramMap.get('id');
    this.loadRoseDetails(roseId);
  }

  loadRoseDetails(id: string | null): void {
    this.roseService.getRoseById(id).subscribe(
      (rose) => {
        this.rose = rose;
      },
      (error) => {
        console.error('Error loading rose details:', error);
        this.errorLoadingRose = true;
        this.errorMessage = 'Failed to load rose details. Please try again later.';
      }
    );
  }

  addToCart(): void {
    this.cartService.addToCart(this.rose);
  }
}
