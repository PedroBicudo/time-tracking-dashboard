import { Component, OnInit } from '@angular/core';
import { TimeReport } from 'src/app/components/dashboard/models/time-report.model';
import { ReportService } from './../../services/report/report.service';

@Component({
  selector: 'app-dashboard-reports',
  templateUrl: './dashboard-reports.component.html',
  styleUrls: ['./dashboard-reports.component.css']
})
export class DashboardReportsComponent implements OnInit {

  reports: TimeReport[] = [];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.reports = this.reportService.reports;
  }

}
