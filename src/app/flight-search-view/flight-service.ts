import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
})
export abstract class FlightService {
  abstract loadFlights(from: string, to: string): Observable<Flight[]>;
}
