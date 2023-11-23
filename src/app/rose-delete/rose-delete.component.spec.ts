import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseDeleteComponent } from './rose-delete.component';

describe('RoseDeleteComponent', () => {
  let component: RoseDeleteComponent;
  let fixture: ComponentFixture<RoseDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoseDeleteComponent]
    });
    fixture = TestBed.createComponent(RoseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
