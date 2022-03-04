import { Component, Input, OnInit } from '@angular/core';
import { TimeframeType, TimeReport } from 'src/app/components/dashboard/models/time-report.model';
import { ReportService } from './../../../../services/report/report.service';

@Component({
  selector: 'app-card-report',
  templateUrl: './card-report.component.html',
  styleUrls: ['./card-report.component.css']
})
export class CardReportComponent implements OnInit {

  @Input()
  report!: TimeReport;

  @Input()
  timeframeOption!: { option: TimeframeType };

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.timeframeOption = this.reportService.timeframeOption;
  }

}
