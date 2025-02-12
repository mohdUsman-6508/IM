import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../interfaces/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}
  baseUrl: string = `http://localhost:8080/api/device`;

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/`);
  }

  getDeviceById(id: number): Observable<Device> {
    let apiUrlGetDeviceById = `${this.baseUrl}/get/${id}`;
    return this.http.get<Device>(apiUrlGetDeviceById);
  }

  addDevice(device: Device): Observable<Device> {
    let apiUrlAddDevice = `${this.baseUrl}/add`;
    return this.http.post<Device>(apiUrlAddDevice, device);
  }

  updateDevice(device: Device, deviceId: number): Observable<Device> {
    let apiUrlUpdateDevice = `${this.baseUrl}/modify/${deviceId}`;
    return this.http.put<Device>(apiUrlUpdateDevice, device);
  }

  deleteDevice(deviceId: number | undefined): Observable<Device> {
    let apiUrlDeleteDevice = `${this.baseUrl}/delete/${deviceId}`;
    return this.http.delete<Device>(apiUrlDeleteDevice);
  }
}
