import { Component, inject, signal } from '@angular/core';
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
  from = signal('Wien');
  to = signal('Berlin');

  flights = signal<Flight[]>([]);
  basket = signal<Record<number, boolean>>({
    135: true
  });

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.loadFlights(this.from(), this.to())
                      .subscribe(flights => this.flights.set(flights));
  }

  updateBasket(flightId: number, state: boolean) {
    this.basket.update(currentBasket => ({ ...currentBasket, [flightId]: state }));
  }
}
