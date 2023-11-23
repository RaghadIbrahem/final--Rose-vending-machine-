import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoseService } from '../rose.service';
@Component({
  selector: 'app-rose-delete',
  templateUrl: './rose-delete.component.html',
  styleUrls: ['./rose-delete.component.css']
})
export class RoseDeleteComponent implements OnInit{
  rose: any;
  deleteSuccess: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private roseService: RoseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRoseDetails();
  }

  loadRoseDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.roseService.getRoseById(id).subscribe(
      (rose) => {
        this.rose = rose;
      },
      (error) => {
        console.error('Error loading rose details:', error);
      }
    );
  }

  deleteRose(): void {
    if (confirm('Are you sure you want to delete this rose?')) {
      this.roseService.deleteRose(this.rose.id.toString()).subscribe(
        () => {
          console.log('Rose deleted successfully');
          this.deleteSuccess = true;
        },
        (error) => {
          console.error('Error deleting rose:', error);
        }
      );
    }
  }
}
