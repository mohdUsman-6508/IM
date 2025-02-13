import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfToShelfPositionComponent } from './add-shelf-to-shelf-position.component';

describe('AddShelfToShelfPositionComponent', () => {
  let component: AddShelfToShelfPositionComponent;
  let fixture: ComponentFixture<AddShelfToShelfPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShelfToShelfPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelfToShelfPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
