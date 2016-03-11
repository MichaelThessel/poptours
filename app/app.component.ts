import {Component} from 'angular2/core';
import {HTTP_PROVIDERS,} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './home-component/home.component';
import {ToursComponent} from './tours-component/tours.component';
import {TourComponent} from './tour-component/tour.component';
import {ToursService} from './tours-component/tours.service';
import {PlacesService} from './places-component/places.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, ToursService, PlacesService],
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/tours/:slug',
        name: 'Tours',
        component: ToursComponent,
    },
    {
        path: '/tour/:slug',
        name: 'Tour',
        component: TourComponent,
    }
])

export class AppComponent {
    getCopyYear(start) {
        var date = new Date(),
            year = date.getFullYear();

        if (year == start) return year.toString();

        return start.toString() + ' - ' + year.toString();
    }
}
