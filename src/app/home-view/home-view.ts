import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  imports: [],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css'
})
export class HomeView {

  router = inject(Router);

  goToFlightSearch() {
    this.router.navigate(['/flight-search']);
  }

}
