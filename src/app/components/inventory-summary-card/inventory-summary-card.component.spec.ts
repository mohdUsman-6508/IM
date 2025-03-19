import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySummaryCardComponent } from './inventory-summary-card.component';

describe('InventorySummaryCardComponent', () => {
  let component: InventorySummaryCardComponent;
  let fixture: ComponentFixture<InventorySummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorySummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
