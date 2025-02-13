import { Component } from '@angular/core';
import { ShelfPosition } from '../../interfaces/shelfPosition';
import { ShelfPositionService } from '../../services/shelf-position.service';

@Component({
  selector: 'app-shelf-positions',
  standalone: false,
  templateUrl: './shelf-positions.component.html',
  styleUrl: './shelf-positions.component.css',
})
export class ShelfPositionsComponent {
  shelfPositions: ShelfPosition[] = [];

  constructor(private shelfPositionService: ShelfPositionService) {}

  ngOnInit() {
    this.getShelfPosition();
  }

  getShelfPosition() {
    this.shelfPositionService
      .getShelfPositions()
      .subscribe((data) => (this.shelfPositions = data));
  }
}
