import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTimeOptionsComponent } from './report-time-options.component';

describe('ReportTimeOptionsComponent', () => {
  let component: ReportTimeOptionsComponent;
  let fixture: ComponentFixture<ReportTimeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTimeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTimeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
