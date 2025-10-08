import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }
}
