import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftAccessoriesComponent } from './gift-accessories.component';

describe('GiftAccessoriesComponent', () => {
  let component: GiftAccessoriesComponent;
  let fixture: ComponentFixture<GiftAccessoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftAccessoriesComponent]
    });
    fixture = TestBed.createComponent(GiftAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
