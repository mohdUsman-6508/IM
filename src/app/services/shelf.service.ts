import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelf } from '../interfaces/shelf';
import { Observable } from 'rxjs';
import { ShelfSummary } from '../interfaces/shelfSummary';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  constructor(private http: HttpClient) {}

  readonly baseUrl: string = `http://localhost:8080/api/shelfService`;

  addShelf(shelf: Shelf): Observable<Shelf> {
    const apiUrlAddShelf = `${this.baseUrl}/addShelf`;
    return this.http.post<Shelf>(apiUrlAddShelf, shelf);
  }

  addShelfToShelfPosition(
    shelfId: number,
    shelfPositionId: number
  ): Observable<Shelf> {
    const apiUrlAddShelfToShelfPosition = `${this.baseUrl}/addShelfToShelfPosition/${shelfId}/${shelfPositionId}`;
    return this.http.post<Shelf>(apiUrlAddShelfToShelfPosition, {});
  }

  getShelves(): Observable<Shelf[]> {
    const apiUrlGetShelves = `${this.baseUrl}/getAllShelves`;
    return this.http.get<Shelf[]>(apiUrlGetShelves);
  }

  getShelfById(id: number): Observable<Shelf> {
    const apiUrlGetShelfById = `${this.baseUrl}/getShelfById/${id}`;
    return this.http.get<Shelf>(apiUrlGetShelfById);
  }

  getShelfSummary(id: string | undefined): Observable<ShelfSummary[]> {
    const apiUrlGetShelfSummary = `${this.baseUrl}/shelfSummary/${id}`;
    return this.http.get<ShelfSummary[]>(apiUrlGetShelfSummary);
  }
}
