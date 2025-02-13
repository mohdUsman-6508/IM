import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfPositionComponent } from './add-shelf-position.component';

describe('AddShelfPositionComponent', () => {
  let component: AddShelfPositionComponent;
  let fixture: ComponentFixture<AddShelfPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShelfPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
