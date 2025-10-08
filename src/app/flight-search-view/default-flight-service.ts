import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { HttpClient } from '@angular/common/http';
import { FlightService } from './flight-service';
import { BASE_URL } from '../util/base-url';

export class DefaultFlightService implements FlightService {
  private httpClient = inject(HttpClient);
  private baseUrl = inject(BASE_URL);

  loadFlights(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + 'flight';
    const params = { from, to };
    const headers = { Accept: 'application/json' };
    return this.httpClient.get<Flight[]>(url, { params, headers });
  }
}
