import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfSummaryComponent } from './shelf-summary.component';

describe('ShelfSummaryComponent', () => {
  let component: ShelfSummaryComponent;
  let fixture: ComponentFixture<ShelfSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShelfSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
