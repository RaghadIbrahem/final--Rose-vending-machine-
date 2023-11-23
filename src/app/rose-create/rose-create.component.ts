import { Component, OnInit } from '@angular/core';
import { RoseService } from '../rose.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rose-create',
  templateUrl: './rose-create.component.html',
  styleUrls: ['./rose-create.component.css']
})
export class RoseCreateComponent implements OnInit {
  rose: any = {
    color: '',
    price: 0,
    quantity: 0,
    roseType: '',
    rose_img_url: ''
  };
  errorCreatingRoses = false;
  errorMessage = '';
  roseCreatedSuccessfully = false;
  constructor(private roseService: RoseService, private router: Router) { }

  ngOnInit(): void {
  }

  createRose(): void {
    console.log("rose body: ", this.rose);


    this.roseService.createRose(this.rose).subscribe({
      next: createdRose => {
        console.log('Rose created successfully:', createdRose);
        this.errorCreatingRoses = false;
        this.showSuccessAlert();
      },
      error: error => {
        console.error('Error creating rose:', error);
        this.errorCreatingRoses = true;
        this.errorMessage = 'Error creating rose. Please try again later.';
      }
    });
  }
  showSuccessAlert(): void {
    alert('Rose created successfully!');
  }
}
