import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { HttpClient } from '@angular/common/http';
import { FlightService } from './flight-service';

@Injectable()
export class DefaultFlightService implements FlightService {
  private httpClient = inject(HttpClient);

  loadFlights(from: string, to: string): Observable<Flight[]> {
    const url = 'http://demo.angulararchitects.io/api/flight';
    const params = { from, to };
    const headers = { Accept: 'application/json' };
    return this.httpClient.get<Flight[]>(url, { params, headers });
  }
}
