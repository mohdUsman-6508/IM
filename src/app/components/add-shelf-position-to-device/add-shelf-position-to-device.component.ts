import { Component } from '@angular/core';
import { ShelfPositionService } from '../../services/shelf-position.service';

@Component({
  selector: 'app-add-shelf-position-to-device',
  standalone: false,
  templateUrl: './add-shelf-position-to-device.component.html',
  styleUrl: './add-shelf-position-to-device.component.css',
})
export class AddShelfPositionToDeviceComponent {
  deviceId: number = 0;
  shelfPositionId: number = 1;
  errMessage: string = '';

  constructor(private shelfPositionService: ShelfPositionService) {}

  addShelfPositionToDevice() {
    this.shelfPositionService
      .addShelfPositionToDevice(this.deviceId, this.shelfPositionId)
      .subscribe({
        next: () => {
          alert('ShelfPosition added to device!');
        },
        error: (err) => {
          this.errMessage = err.message;
        },
      });
  }
}
