import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-summary-card',
  standalone: false,
  templateUrl: './inventory-summary-card.component.html',
  styleUrl: './inventory-summary-card.component.css',
})
export class InventorySummaryCardComponent {
  @Input() totalQuantity = 0;
  @Input() link = '';
  @Input() name = '';
}
