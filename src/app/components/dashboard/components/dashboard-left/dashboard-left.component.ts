import { TimeframeType } from 'src/app/components/dashboard/models/time-report.model';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-left',
  templateUrl: './dashboard-left.component.html',
  styleUrls: ['./dashboard-left.component.css']
})
export class DashboardLeftComponent implements OnInit {

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
