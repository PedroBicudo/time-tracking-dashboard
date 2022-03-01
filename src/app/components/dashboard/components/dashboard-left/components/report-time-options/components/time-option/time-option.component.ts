import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-option',
  templateUrl: './time-option.component.html',
  styleUrls: ['./time-option.component.css']
})
export class TimeOptionComponent implements OnInit {

  @Input()
  optionName!: "daily" | "weekly" | "monthly";

  @Input()
  isSelected!: boolean;

  @Output()
  optionSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption() {
    this.optionSelected.emit();
  }

  capitalizeOption() {
    return this.optionName.charAt(0).toUpperCase() + this.optionName.substring(1);
  }

}
