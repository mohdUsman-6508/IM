import { Component } from '@angular/core';
import { ShelfPositionService } from '../../services/shelf-position.service';
import { ShelfPosition } from '../../interfaces/shelfPosition';

@Component({
  selector: 'app-add-shelf-position',
  standalone: false,
  templateUrl: './add-shelf-position.component.html',
  styleUrl: './add-shelf-position.component.css',
})
export class AddShelfPositionComponent {
  shelfPosition: ShelfPosition = { name: '' };
  constructor(private shelfPositionService: ShelfPositionService) {}

  addShelfPosition() {
    this.shelfPositionService
      .addShelfPosition(this.shelfPosition)
      .subscribe((val) => {
        console.log('val', val);
        alert('Shelf Position added!');
      });
  }
}
