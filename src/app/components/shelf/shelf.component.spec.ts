import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfComponent } from './shelf.component';

describe('ShelfComponent', () => {
  let component: ShelfComponent;
  let fixture: ComponentFixture<ShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
