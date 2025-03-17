import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Shelf } from '../interfaces/shelf';
import { catchError, Observable, throwError } from 'rxjs';
import { ShelfSummary } from '../interfaces/shelfSummary';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  constructor(private http: HttpClient) {}

  readonly baseUrl: string = `http://localhost:8080/api/shelfService`;

  addShelf(shelf: Shelf): Observable<Shelf> {
    const apiUrlAddShelf = `${this.baseUrl}/addShelf`;
    if (shelf.name.trim() == '' || shelf.shelfType.trim() == '') {
      alert('Fields cannot be empty!');
      throw new Error('Some fields are empty!');
    }
    return this.http.post<Shelf>(apiUrlAddShelf, shelf);
  }

  addShelfToShelfPosition(
    shelfId: number,
    shelfPositionId: number
  ): Observable<Shelf> {
    const apiUrlAddShelfToShelfPosition = `${this.baseUrl}/addShelfToShelfPosition/${shelfId}/${shelfPositionId}`;
    if (
      shelfId.toString().trim() == '' ||
      shelfPositionId.toString().trim() == ''
    ) {
      alert('Id cannot be empty!');
      throw new Error('Id is empty!');
    }
    return this.http
      .post<Shelf>(apiUrlAddShelfToShelfPosition, {})
      .pipe(catchError(this.handleError));
  }

  getShelves(): Observable<Shelf[]> {
    const apiUrlGetShelves = `${this.baseUrl}/getAllShelves`;
    return this.http.get<Shelf[]>(apiUrlGetShelves);
  }

  getShelfById(id: number): Observable<Shelf> {
    const apiUrlGetShelfById = `${this.baseUrl}/getShelfById/${id}`;
    if (id.toString().trim() == '') {
      alert('Id cannot be empty!');
      throw new Error('Id is empty!');
    }
    return this.http
      .get<Shelf>(apiUrlGetShelfById)
      .pipe(catchError(this.handleError));
  }

  getShelfSummary(id: string | undefined): Observable<ShelfSummary[]> {
    const apiUrlGetShelfSummary = `${this.baseUrl}/shelfSummary/${id}`;
    if (id?.toString().trim() == '') {
      alert('Id cannot be empty!');
      throw new Error('Id is empty!');
    }
    return this.http
      .get<ShelfSummary[]>(apiUrlGetShelfSummary)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error ocurred!';
    if (error.status === 404) {
      errorMessage = 'ID does not exist!';
    } else if (error.status === 500) {
      errorMessage = 'Server error!';
    }
    return throwError(() => new Error(errorMessage));
  }
}
