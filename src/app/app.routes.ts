import { Routes } from '@angular/router';
import { HomeView } from './home-view/home-view';
import { FlightSearchView } from './flight-search-view/flight-search-view';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeView
    },
    {
        path: 'flight-search',
        component: FlightSearchView
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
