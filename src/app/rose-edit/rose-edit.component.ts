// rose-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoseService } from '../rose.service';

@Component({
  selector: 'app-rose-edit',
  templateUrl: './rose-edit.component.html',
  styleUrls: ['./rose-edit.component.css']
})
export class RoseEditComponent implements OnInit {
  rose: any = {};
  errorLoadingRose = false;
  errorMessage = '';
  updateSuccess = false; 

  constructor(
    private route: ActivatedRoute,
    private roseService: RoseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadRoseDetails(id);
  }

  loadRoseDetails(id: string | null): void {
    this.roseService.getRoseById(id).subscribe(
      (rose) => {
        this.rose = rose;
      },
      (error) => {
        console.error('Error loading rose details:', error);
        this.errorLoadingRose = true;
        this.errorMessage =
          'Failed to load rose details. Please try again later.';
      }
    );
  }

  updateRose(): void {
    this.roseService.updateRose(this.rose).subscribe(
      (updatedRose) => {
        console.log('Rose updated successfully!', updatedRose);
        this.showSuccessAlert(); 
        this.updateSuccess = true;
        setTimeout(() => {
          this.updateSuccess = false;
        }, 3000);
      },
      (error) => {
        console.error('Error updating rose:', error);
      }
    );
  }
  
  showSuccessAlert(): void {
    alert('Rose updated successfully!');
  }
}
