import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight-service';
import { DefaultFlightService } from './default-flight-service';
import { JsonPipe } from '@angular/common';
import { FlightCard } from '../flight-card/flight-card';

@Component({
  selector: 'app-flight-search-view',
  standalone: true,
  imports: [FormsModule, FlightCard, JsonPipe],
  templateUrl: './flight-search-view.html',
  providers: [
    { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchView {
  from = 'Wien';
  to = 'Berlin';

  flights: Flight[] = [];
  basket: Record<number, boolean> = {
    135: true
  };

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.loadFlights(this.from, this.to)
                      .subscribe(flights => this.flights = flights);
  }
}
