import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/layout/main/main.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardLeftComponent } from './components/dashboard/components/dashboard-left/dashboard-left.component';
import { DashboardReportsComponent } from './components/dashboard/components/dashboard-reports/dashboard-reports.component';
import { ReportOwnerComponent } from './components/dashboard/components/dashboard-left/components/report-owner/report-owner.component';
import { ReportTimeOptionsComponent } from './components/dashboard/components/dashboard-left/components/report-time-options/report-time-options.component';
import { CardReportComponent } from './components/dashboard/components/dashboard-reports/components/card-report/card-report.component';
import { TimeOptionComponent } from './components/dashboard/components/dashboard-left/components/report-time-options/components/time-option/time-option.component';
import { CardIconControllerDirective } from './components/dashboard/components/dashboard-reports/components/card-report/directives/card-icon-controller.directive';
import { AttributionComponent } from './components/attribution/attribution.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    DashboardLeftComponent,
    DashboardReportsComponent,
    ReportOwnerComponent,
    ReportTimeOptionsComponent,
    CardReportComponent,
    TimeOptionComponent,
    CardIconControllerDirective,
    AttributionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
