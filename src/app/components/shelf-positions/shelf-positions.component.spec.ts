import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfPositionsComponent } from './shelf-positions.component';

describe('ShelfPositionsComponent', () => {
  let component: ShelfPositionsComponent;
  let fixture: ComponentFixture<ShelfPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShelfPositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
