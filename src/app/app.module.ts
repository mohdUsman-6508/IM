import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './components/device/device.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { UpdateDeviceComponent } from './components/update-device/update-device.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AddShelfPositionComponent } from './components/add-shelf-position/add-shelf-position.component';
import { AddShelfPositionToDeviceComponent } from './components/add-shelf-position-to-device/add-shelf-position-to-device.component';
import { ShelfPositionsComponent } from './components/shelf-positions/shelf-positions.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { AddShelfComponent } from './components/add-shelf/add-shelf.component';
import { AddShelfToShelfPositionComponent } from './components/add-shelf-to-shelf-position/add-shelf-to-shelf-position.component';
import { ShelfByIdComponent } from './components/shelf-by-id/shelf-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AddDeviceComponent,
    UpdateDeviceComponent,
    NavComponent,
    HomeComponent,
    AddShelfPositionComponent,
    AddShelfPositionToDeviceComponent,
    ShelfPositionsComponent,
    ShelfComponent,
    AddShelfComponent,
    AddShelfToShelfPositionComponent,
    ShelfByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
