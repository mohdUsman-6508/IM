import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { UpdateDeviceComponent } from './components/update-device/update-device.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'devices', component: DeviceComponent },
  { path: 'addDevice', component: AddDeviceComponent },
  { path: 'updateDevice', component: UpdateDeviceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
