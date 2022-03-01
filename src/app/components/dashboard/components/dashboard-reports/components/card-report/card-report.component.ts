import { TimeframeType, TimeReport } from 'src/app/components/dashboard/models/time-report.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.css']
})
export class CardReportComponent implements OnInit {

  @Input()
  report!: TimeReport;

  @Input()
  timeframeType!: TimeframeType;

  constructor() { }

  ngOnInit(): void {
  }

}
