import { Component, input, model } from '@angular/core';
import { initialFlight } from '../entities/flight';
import { DatePipe, NgStyle } from '@angular/common';
import { CityPipe } from '../util/city-pipe';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, NgStyle, CityPipe],
  templateUrl: './flight-card.html'
})
export class FlightCard {
  item = input(initialFlight);
  selected = model(false);

  select() {
    this.selected.set(true);
  }

  deselect() {
    this.selected.set(false);
  }
}
