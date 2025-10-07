import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flight';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  private httpClient = inject(HttpClient);

  search(): void {
    const url = 'http://demo.angulararchitects.io/api/flight';
    const params = { from: this.from, to: this.to };
    const headers = { 'Accept': 'application/json' };
    this.httpClient.get<Flight[]>(url, { params, headers })
                   .subscribe(flights => this.flights = flights);
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
