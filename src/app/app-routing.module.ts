import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { UpdateDeviceComponent } from './components/update-device/update-device.component';
import { HomeComponent } from './components/home/home.component';
import { ShelfPositionsComponent } from './components/shelf-positions/shelf-positions.component';
import { AddShelfPositionComponent } from './components/add-shelf-position/add-shelf-position.component';
import { AddShelfPositionToDeviceComponent } from './components/add-shelf-position-to-device/add-shelf-position-to-device.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { AddShelfComponent } from './components/add-shelf/add-shelf.component';
import { AddShelfToShelfPositionComponent } from './components/add-shelf-to-shelf-position/add-shelf-to-shelf-position.component';
import { ShelfByIdComponent } from './components/shelf-by-id/shelf-by-id.component';
import { ShelfSummaryComponent } from './components/shelf-summary/shelf-summary.component';

const routes: Routes = [
  { path: 'devices', component: DeviceComponent },
  { path: 'addDevice', component: AddDeviceComponent },
  { path: 'updateDevice', component: UpdateDeviceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'shelfPositions', component: ShelfPositionsComponent },
  { path: 'addShelfPosition', component: AddShelfPositionComponent },
  {
    path: 'addShelfPositionToDevice',
    component: AddShelfPositionToDeviceComponent,
  },

  { path: 'shelves', component: ShelfComponent },
  { path: 'addShelf', component: AddShelfComponent },
  {
    path: 'addShelfToShelfPosition',
    component: AddShelfToShelfPositionComponent,
  },

  { path: 'shelf', component: ShelfByIdComponent },
  { path: 'shelfSummary/:id', component: ShelfSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
