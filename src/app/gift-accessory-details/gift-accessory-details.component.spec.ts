import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftAccessoryDetailsComponent } from './gift-accessory-details.component';

describe('GiftAccessoryDetailsComponent', () => {
  let component: GiftAccessoryDetailsComponent;
  let fixture: ComponentFixture<GiftAccessoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftAccessoryDetailsComponent]
    });
    fixture = TestBed.createComponent(GiftAccessoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
