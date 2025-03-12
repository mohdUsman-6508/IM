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
    this.shelfService.getShelfSummary(id).subscribe((data: ShelfSummary[]) => {
      this.summary = data[0];
    });
  }
}
