import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShelfPosition } from '../interfaces/shelfPosition';

@Injectable({
  providedIn: 'root',
})
export class ShelfPositionService {
  constructor(private http: HttpClient) {}

  baseUrl: string = `http://localhost:8080/api/shelfService`;

  addShelfPosition(shelfPosition: ShelfPosition): Observable<ShelfPosition> {
    let apiUrlAddShelfPosition = `${this.baseUrl}/addShelfPosition`;
    return this.http.post<ShelfPosition>(apiUrlAddShelfPosition, shelfPosition);
  }

  addShelfPositionToDevice(
    deviceId: number,
    shelfPositionId: number
  ): Observable<any> {
    let apiUrlAddShelfPositionToDevice = `${this.baseUrl}/addShelfPositionToDevice/${deviceId}/${shelfPositionId}`;
    return this.http.post<any>(apiUrlAddShelfPositionToDevice, {});
  }

  getShelfPositions(): Observable<ShelfPosition[]> {
    let apiUrlGetShelfPositions = `${this.baseUrl}/getAllShelfPosition`;
    return this.http.get<ShelfPosition[]>(apiUrlGetShelfPositions);
  }
}
