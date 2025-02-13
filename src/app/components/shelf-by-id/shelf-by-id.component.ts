import { Component } from '@angular/core';
import { ShelfService } from '../../services/shelf.service';
import { Shelf } from '../../interfaces/shelf';

@Component({
  selector: 'app-shelf-by-id',
  standalone: false,
  templateUrl: './shelf-by-id.component.html',
  styleUrl: './shelf-by-id.component.css',
})
export class ShelfByIdComponent {
  shelf: Shelf = { name: '', shelfType: '' };
  shelfId: number = 0;
  constructor(private shelfService: ShelfService) {}

  shelfFlag: boolean = false;

  getShelf() {
    this.shelfService.getShelfById(this.shelfId).subscribe((data) => {
      this.shelf = data;
      if (data != null) {
        this.shelfFlag = true;
      }
    });
    this.shelfId = 0;
  }
}
