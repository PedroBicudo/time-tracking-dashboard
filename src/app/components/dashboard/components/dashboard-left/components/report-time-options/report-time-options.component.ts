import { Component, OnInit } from '@angular/core';
import { TimeframeType } from 'src/app/components/dashboard/models/time-report.model';
import { ReportService } from './../../../../services/report/report.service';

@Component({
  selector: 'app-report-time-options',
  templateUrl: './report-time-options.component.html',
  styleUrls: ['./report-time-options.component.css']
})
export class ReportTimeOptionsComponent implements OnInit {

  optionSelected!: { option: TimeframeType };

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.optionSelected = this.reportService.timeframeOption;
  }

  onOptionSelected(timeframeType: TimeframeType) {
    this.reportService.timeframeOption.option = timeframeType;
    
  }

}
