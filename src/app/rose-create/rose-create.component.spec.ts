import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseCreateComponent } from './rose-create.component';

describe('RoseCreateComponent', () => {
  let component: RoseCreateComponent;
  let fixture: ComponentFixture<RoseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoseCreateComponent]
    });
    fixture = TestBed.createComponent(RoseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
