import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShelfService } from '../../services/shelf.service';
import { ShelfSummary } from '../../interfaces/shelfSummary';

@Component({
  selector: 'app-shelf-summary',
  standalone: false,
  templateUrl: './shelf-summary.component.html',
  styleUrl: './shelf-summary.component.css',
})
export class ShelfSummaryComponent {
  shelfId!: string;
  summary!: ShelfSummary;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private shelfService: ShelfService
  ) {}

  ngOnInit() {
    this.shelfId = this.route.snapshot.paramMap.get('id')!;
    if (this.shelfId) {
      this.getSummary(this.shelfId);
    }
  }

  getSummary(id: string | undefined) {
    this.shelfService.getShelfSummary(id).subscribe({
      next: (data: ShelfSummary[]) => {
        this.summary = data[0];
      },
      error: (err) => {
        this.errorMessage = err.errorMessage;
        alert(err.errorMessage);
      },
    });
  }
}
