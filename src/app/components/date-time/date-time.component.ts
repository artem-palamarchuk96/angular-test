import { Component } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent {
  constructor(private readonly dateTimeService: DateTimeService) {}
}
