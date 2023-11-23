import { Component, OnInit } from '@angular/core';
import { RoseService } from '../rose.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-roses',
  templateUrl: './roses.component.html',
  styleUrls: ['./roses.component.css']
})
export class RosesComponent implements OnInit{
  roses: any[] = [];
  errorLoadingRose = false;
  errorMessage = '';

  constructor(private roseService: RoseService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getRoses();
  }

  getRoses(): void {
    this.roseService.getAllRoses().subscribe(
      roses =>{
     this.roses=roses;
      },
      error => {
        console.error('Error loading Roses:', error);
        this.errorLoadingRose = true;
        this.errorMessage = 'Failed to load Roses. Please try again later.';
      }
    );
  }
addToCart(rose: any): void {
  this.cartService.addToCart(rose);
  console.log('Added to cart:', rose);
}
}
