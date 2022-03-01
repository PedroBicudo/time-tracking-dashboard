import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TimeReportTypes } from 'src/app/components/dashboard/models/time-report.model';

@Directive({
  selector: '[appCardIconController]'
})
export class CardIconControllerDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @Input()
  timeReportType!: TimeReportTypes;

  ngOnInit(): void {
    let parent = this.renderer.parentNode(this.elementRef.nativeElement);
    this.renderer.addClass(parent, this.getClassNameBasedOnTitle(this.timeReportType));

    this.renderer.setProperty(this.elementRef.nativeElement, "src", this.getSourceBasedOnTitle(this.timeReportType));
    this.renderer.setProperty(this.elementRef.nativeElement, "alt", this.timeReportType);
      
  }

  getClassNameBasedOnTitle(title: TimeReportTypes) {
    switch(title) {
      case 'Exercise':
        return "exercise";
      
      case 'Play':
        return "play";
      
      case 'Self Care':
      return "self-care";

      case 'Social':
        return "social";
      
      case 'Study':
        return "study";

      case 'Work':
        return "work";
    }
  }

  getSourceBasedOnTitle(title: TimeReportTypes) {
    switch(title) {
      case 'Exercise':
        return "assets/images/icon-exercise.svg";
      
      case 'Play':
        return "assets/images/icon-play.svg";
      
      case 'Self Care':
      return "assets/images/icon-self-care.svg";

      case 'Social':
        return "assets/images/icon-social.svg";
      
      case 'Study':
        return "assets/images/icon-study.svg";

      case 'Work':
        return "assets/images/icon-work.svg";
    }

  }

}
