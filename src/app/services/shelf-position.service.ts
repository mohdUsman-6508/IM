import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ShelfPosition } from '../interfaces/shelfPosition';

@Injectable({
  providedIn: 'root',
})
export class ShelfPositionService {
  constructor(private http: HttpClient) {}

  readonly baseUrl: string = `https://im-backend-qamj.onrender.com`;

  addShelfPosition(shelfPosition: ShelfPosition): Observable<ShelfPosition> {
    let apiUrlAddShelfPosition = `${this.baseUrl}/addShelfPosition`;
    if (shelfPosition.name.trim() == '') {
      alert('Shelf Position name cannot be empty!');
      throw new Error('Fields are empty!');
    }

    return this.http.post<ShelfPosition>(apiUrlAddShelfPosition, shelfPosition);
  }

  addShelfPositionToDevice(
    deviceId: number,
    shelfPositionId: number
  ): Observable<any> {
    let apiUrlAddShelfPositionToDevice = `${this.baseUrl}/addShelfPositionToDevice/${deviceId}/${shelfPositionId}`;
    if (
      deviceId.toString().trim() == '' ||
      shelfPositionId.toString().trim() == ''
    ) {
      alert('Id cannot be empty!');
      throw new Error('Fields are empty!');
    }

    return this.http.post<any>(apiUrlAddShelfPositionToDevice, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error ocurred!';
        if (error.status === 404) {
          errorMessage = 'ID does not exist!';
        } else if (error.status === 500) {
          errorMessage = 'Server error!';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getShelfPositions(): Observable<ShelfPosition[]> {
    let apiUrlGetShelfPositions = `${this.baseUrl}/getAllShelfPosition`;
    return this.http.get<ShelfPosition[]>(apiUrlGetShelfPositions);
  }
}
