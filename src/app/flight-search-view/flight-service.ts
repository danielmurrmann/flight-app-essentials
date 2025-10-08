import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';
import { DummyFlightService } from './dummy-flight-service';

function flightServiceFactory() {
  const useDummyValues = true; // inject(ConfigService).useDummyValues;
    if(useDummyValues) {
      return new DummyFlightService();
    } else {
      return new DefaultFlightService();
    }
}

@Injectable({
  providedIn: 'root',
  useFactory: flightServiceFactory
})
export abstract class FlightService {
  abstract loadFlights(from: string, to: string): Observable<Flight[]>;
}
