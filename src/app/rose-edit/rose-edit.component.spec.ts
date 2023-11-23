import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseEditComponent } from './rose-edit.component';

describe('RoseEditComponent', () => {
  let component: RoseEditComponent;
  let fixture: ComponentFixture<RoseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoseEditComponent]
    });
    fixture = TestBed.createComponent(RoseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
