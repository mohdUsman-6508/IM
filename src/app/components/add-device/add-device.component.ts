import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../interfaces/device';

@Component({
  selector: 'app-add-device',
  standalone: false,
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.css',
})
export class AddDeviceComponent {
  device: Device = { name: '', deviceType: '' };

  constructor(private deviceService: DeviceService) {}

  addDevice() {
    this.deviceService.addDevice(this.device).subscribe((res) => {
      res != null ? alert('Device added!') : alert('Invalid data!');
    });
    this.device = { name: '', deviceType: '' };
  }
}
