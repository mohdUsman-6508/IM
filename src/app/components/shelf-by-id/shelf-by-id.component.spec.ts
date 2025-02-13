import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfByIdComponent } from './shelf-by-id.component';

describe('ShelfByIdComponent', () => {
  let component: ShelfByIdComponent;
  let fixture: ComponentFixture<ShelfByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShelfByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
