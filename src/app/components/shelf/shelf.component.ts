import { Component } from '@angular/core';
import { Shelf } from '../../interfaces/shelf';
import { ShelfService } from '../../services/shelf.service';

@Component({
  selector: 'app-shelf',
  standalone: false,
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.css',
})
export class ShelfComponent {
  constructor(private shelfService: ShelfService) {}
  shelves: Shelf[] = [];
  ngOnInit() {
    this.getShelves();
  }

  getShelves() {
    this.shelfService.getShelves().subscribe((data) => {
      this.shelves = data;
    });
  }
}
