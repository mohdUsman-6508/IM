import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../interfaces/device';

@Component({
  selector: 'app-update-device',
  standalone: false,
  templateUrl: './update-device.component.html',
  styleUrl: './update-device.component.css',
})
export class UpdateDeviceComponent {
  device: Device = { name: '', deviceType: '' };
  deviceId: number = 0;
  errMessage: string = '';
  constructor(private deviceService: DeviceService) {}

  updateDevice() {
    this.deviceService.updateDevice(this.device, this.deviceId).subscribe({
      next: (res) => {
        alert('Device updated!');
      },
      error: (err) => {
        this.errMessage = err.message;
      },
    });
    this.device = { name: '', deviceType: '' };
    this.deviceId = 0;
  }
}
