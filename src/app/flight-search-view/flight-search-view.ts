import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight-service';

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

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.loadFlights(this.from, this.to)
                      .subscribe(flights => this.flights = flights);
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
