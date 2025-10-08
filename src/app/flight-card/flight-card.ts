import { Component, Input } from '@angular/core';
import { initialFlight } from '../entities/flight';
import { DatePipe, NgStyle } from '@angular/common';
import { CityPipe } from '../util/city-pipe';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, NgStyle, CityPipe],
  templateUrl: './flight-card.html'
})
export class FlightCard {
  @Input() item = initialFlight;
  @Input() selected = false;

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }
}
