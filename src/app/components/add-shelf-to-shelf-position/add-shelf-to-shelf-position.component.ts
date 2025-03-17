import { Component } from '@angular/core';
import { ShelfService } from '../../services/shelf.service';

@Component({
  selector: 'app-add-shelf-to-shelf-position',
  standalone: false,
  templateUrl: './add-shelf-to-shelf-position.component.html',
  styleUrl: './add-shelf-to-shelf-position.component.css',
})
export class AddShelfToShelfPositionComponent {
  constructor(private shelfService: ShelfService) {}

  shelfId: number = 0;
  shelfPositionId: number = 1;
  errMessage: string = '';

  addShelfToShelfPosition() {
    this.shelfService
      .addShelfToShelfPosition(this.shelfId, this.shelfPositionId)
      .subscribe({
        next: () => {
          alert('Shelf added to shelfposition');
        },
        error: (err) => {
          this.errMessage = err.message;
        },
      });

    this.shelfId = 0;
    this.shelfPositionId = 1;
  }
}
