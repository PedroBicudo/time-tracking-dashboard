import { Component, Input, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("reportContent", {static: true})
  reportContent!: ElementRef;

  @ViewChild("reportMenuOptions", {static: true})
  reportMenuOptions!: ElementRef;

  constructor(
    private reportService: ReportService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.timeframeOption = this.reportService.timeframeOption;

    this.renderer.listen(this.reportContent.nativeElement, "mouseenter", () => {
      this.renderer.addClass(this.reportContent.nativeElement, "active");
      
    });

    this.renderer.listen(this.reportContent.nativeElement, "mouseleave", () => {
      this.renderer.removeClass(this.reportContent.nativeElement, "active");

    });

    this.renderer.listen(this.reportMenuOptions.nativeElement, "mouseenter", (ev: Event) => {
      this.renderer.removeClass(this.reportContent.nativeElement, "active");
      
    });

    this.renderer.listen(this.reportMenuOptions.nativeElement, "mouseleave", (ev: Event) => {
      this.renderer.addClass(this.reportContent.nativeElement, "active");
      
    });

  }

}
