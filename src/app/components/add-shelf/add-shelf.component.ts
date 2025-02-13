import { Component } from '@angular/core';
import { ShelfService } from '../../services/shelf.service';
import { Shelf } from '../../interfaces/shelf';

@Component({
  selector: 'app-add-shelf',
  standalone: false,
  templateUrl: './add-shelf.component.html',
  styleUrl: './add-shelf.component.css',
})
export class AddShelfComponent {
  constructor(private shelfService: ShelfService) {}

  shelf: Shelf = { name: '', shelfType: '' };

  addShelf() {
    this.shelfService.addShelf(this.shelf).subscribe(() => {
      alert('Shelf added!');
    });
    this.shelf = { name: '', shelfType: '' };
  }
}
