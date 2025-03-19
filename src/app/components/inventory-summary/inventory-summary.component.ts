import { Component, inject } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { InventorySummary } from '../../interfaces/inventorySummary';

@Component({
  selector: 'app-inventory-summary',
  standalone: false,
  templateUrl: './inventory-summary.component.html',
  styleUrl: './inventory-summary.component.css',
})
export class InventorySummaryComponent {
  service = inject(DeviceService);
  inventorySummary!: InventorySummary;

  ngOnInit() {
    this.service.getInventorySummary().subscribe({
      next: (data) => {
        this.inventorySummary = data[0];
      },
      error: (err) => alert(err.message),
    });
  }
}
