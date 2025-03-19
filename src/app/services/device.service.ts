import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Device } from '../interfaces/device';
import { InventorySummary } from '../interfaces/inventorySummary';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}
  readonly baseUrl: string = `https://im-backend-qamj.onrender.com`;

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/getAllDevices`);
  }

  getDeviceById(id: number): Observable<Device> {
    let apiUrlGetDeviceById = `${this.baseUrl}/get/${id}`;
    if (id.toString().trim() == '') {
      alert('Id cannot be empty!');
      throw new Error('Id is emtpy!');
    }
    return this.http.get<Device>(apiUrlGetDeviceById);
  }

  addDevice(device: Device): Observable<Device> {
    if (device.name.trim() == '' || device.deviceType.trim() == '') {
      alert('Device cannot be empty!');
      throw new Error('Fields are empty');
    }

    let apiUrlAddDevice = `${this.baseUrl}/add`;
    return this.http.post<Device>(apiUrlAddDevice, device);
  }

  updateDevice(device: Device, deviceId: number): Observable<Device> {
    let apiUrlUpdateDevice = `${this.baseUrl}/modify/${deviceId}`;
    if (
      device.deviceType.trim() == '' ||
      device.name.trim() == '' ||
      deviceId.toString().trim() == ''
    ) {
      alert('Some fields are empty!');
      throw new Error('Fields are empty!');
    }
    return this.http
      .put<Device>(apiUrlUpdateDevice, device)
      .pipe(catchError(this.handleError));
  }

  deleteDevice(deviceId: number | undefined): Observable<Device> {
    let apiUrlDeleteDevice = `${this.baseUrl}/delete/${deviceId}`;
    if (deviceId?.toString().trim() == '') {
      alert('Id cannot be empty!');
      throw new Error('Id is empty!');
    }
    return this.http.delete<Device>(apiUrlDeleteDevice);
  }

  getInventorySummary(): Observable<InventorySummary[]> {
    let apiInventorySummaryUrl = `${this.baseUrl}/inventory`;
    return this.http
      .get<InventorySummary[]>(apiInventorySummaryUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (error.status === 404) {
      errorMessage = 'Id does not exist!';
    } else if (error.status === 500) {
      errorMessage = 'Server error!';
    }

    return throwError(() => new Error(errorMessage));
  }
}
