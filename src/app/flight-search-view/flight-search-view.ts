import { Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight-service';
import { DefaultFlightService } from './default-flight-service';
import { JsonPipe } from '@angular/common';
import { FlightCard } from '../flight-card/flight-card';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, filter } from 'rxjs';

function calculateFlightRoute(from: string, to: string) {
  return from + ' - ' + to;
}

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
  to = linkedSignal(() => { this.from(); return ''; });
  criteria = computed(() => ({ from: this.from(), to: this.to()}));

  flightRoute = computed(() => calculateFlightRoute(this.from(), this.to()));

  basket = signal<Record<number, boolean>>({
    135: true
  });

  criteria$ = toObservable(this.criteria);
  flightsCriteria$ = this.criteria$.pipe(filter(c => c.from.length >= 3 && c.to.length >= 3), debounceTime(800));
  flightsCritera = toSignal(this.flightsCriteria$, { initialValue: { from: '', to: '' } });

  private flightService = inject(FlightService);
  flightsResource = this.flightService.loadFlightsAsResource(this.flightsCritera);

  constructor() {
    effect(() => {
      console.log(this.flightRoute());
    });
  }
  // search(): void {
  //   this.criteria.set({from: this.from(), to: this.to()});
  // }

  updateBasket(flightId: number, state: boolean) {
    this.basket.update(currentBasket => ({ ...currentBasket, [flightId]: state }));
  }
}
