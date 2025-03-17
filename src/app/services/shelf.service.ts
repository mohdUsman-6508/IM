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
    return this.http.post<Shelf>(apiUrlAddShelfToShelfPosition, {});
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
    return this.http.get<Shelf>(apiUrlGetShelfById);
  }

  getShelfSummary(id: string | undefined): Observable<ShelfSummary[]> {
    const apiUrlGetShelfSummary = `${this.baseUrl}/shelfSummary/${id}`;
    if (id?.toString().trim() == '') {
      alert('Id cannot be empty!');
      throw new Error('Id is empty!');
    }
    return this.http.get<ShelfSummary[]>(apiUrlGetShelfSummary);
  }
}
