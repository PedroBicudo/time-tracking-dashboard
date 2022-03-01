import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeframeType } from 'src/app/components/dashboard/models/time-report.model';

@Component({
  selector: 'app-report-time-options',
  templateUrl: './report-time-options.component.html',
  styleUrls: ['./report-time-options.component.css']
})
export class ReportTimeOptionsComponent implements OnInit {

  options: TimeframeType[] = [
    "daily",
    "weekly",
    "monthly"
  ];

  @Output()
  optionSelected = new EventEmitter<TimeframeType>();

  @Input()
  option!: TimeframeType;

  constructor() { }

  ngOnInit(): void {
    
  }

  onOptionSelected(timeframeType: TimeframeType) {
    this.optionSelected.emit(timeframeType);
    
  }

}
