import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosesComponent } from './roses.component';

describe('RosesComponent', () => {
  let component: RosesComponent;
  let fixture: ComponentFixture<RosesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RosesComponent]
    });
    fixture = TestBed.createComponent(RosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
