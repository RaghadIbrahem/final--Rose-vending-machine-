import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseDetailsComponent } from './rose-details.component';

describe('RoseDetailsComponent', () => {
  let component: RoseDetailsComponent;
  let fixture: ComponentFixture<RoseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoseDetailsComponent]
    });
    fixture = TestBed.createComponent(RoseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
