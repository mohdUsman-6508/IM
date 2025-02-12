import { ShelfPosition } from './shelfPosition';

export interface Device {
  id?: number;
  name: string;
  deviceType: string;
  shelfPositions?: ShelfPosition[];
}
