import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfPositionToDeviceComponent } from './add-shelf-position-to-device.component';

describe('AddShelfPositionToDeviceComponent', () => {
  let component: AddShelfPositionToDeviceComponent;
  let fixture: ComponentFixture<AddShelfPositionToDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShelfPositionToDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelfPositionToDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
