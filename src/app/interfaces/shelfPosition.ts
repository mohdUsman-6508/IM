import { Shelf } from './shelf';

export interface ShelfPosition {
  id?: number;
  name: string;
  deviceId?: number;
  shelf?: Shelf;
}
