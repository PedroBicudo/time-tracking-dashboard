import { TimeframeType } from 'src/app/components/dashboard/models/time-report.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  timeframeTypeSelected: TimeframeType = "weekly";

  constructor() { }

  ngOnInit(): void {
        
  }

  onOptionSelected(timeframeType: TimeframeType) {
    this.timeframeTypeSelected = timeframeType;    
  }

}
