import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOptionComponent } from './time-option.component';

describe('TimeOptionComponent', () => {
  let component: TimeOptionComponent;
  let fixture: ComponentFixture<TimeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
