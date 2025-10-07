import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormsModule],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  from = 'Wien';
  to = 'Berlin';

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;

  search(): void {
    this.flights = [
      { id: 1, from: 'Wien', to: 'Berlin', date: '2025-06-01', delayed: false },
      { id: 2, from: 'Wien', to: 'Berlin', date: '2026-01-01', delayed: true },
      { id: 3, from: 'Wien', to: 'Berlin', date: '2026-02-01', delayed: false }
    ];
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
