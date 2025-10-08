import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight-service';

export class DummyFlightService implements FlightService {

  loadFlights(from: string, to: string): Observable<Flight[]> {
    return of<Flight[]>([
      { id: 1, from: 'Graz', to: 'Hamburg', date: '2024-06-01T10:00', delayed: false },
      { id: 2, from: 'Graz', to: 'Hamburg', date: '2024-06-01T12:00', delayed: true },
      { id: 3, from: 'Graz', to: 'Hamburg', date: '2024-06-01T14:00', delayed: false }
    ]);
  }
}
