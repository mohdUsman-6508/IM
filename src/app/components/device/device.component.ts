import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../interfaces/device';

@Component({
  selector: 'app-device',
  standalone: false,
  templateUrl: './device.component.html',
  styleUrl: './device.component.css',
})
export class DeviceComponent {
  devices: Device[] = [];
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getDevices().subscribe((data) => (this.devices = data));
  }

  deleteDevice(deviceId: number | undefined) {
    this.deviceService.deleteDevice(deviceId).subscribe(() => {
      alert('Device deleted!');
    });
    this.devices = this.devices.filter((device) => device.id !== deviceId);
  }

  // device: any = [];
  // deviceId: number = 0;
  // getDeviceById() {
  //   this.deviceService
  //     .getDeviceById(this.deviceId)
  //     .subscribe((data) => (this.device = data));
  //   console.log(this.device);
  // }
}
