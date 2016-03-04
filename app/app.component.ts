import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {Home} from './home/home';
import {Tours} from './tours/tours';
import {Tour} from './tour/tour';
import {ToursService} from './tours/tours.service';
import {PlacesService} from './places/places.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    directives: [ROUTER_DIRECTIVES]
    providers: [ROUTER_PROVIDERS, ToursService, PlacesService]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: Home,
        useAsDefasult: true,
    },
    {
        path: '/tours/:slug',
        name: 'Tours',
        component: Tours,
    },
    {
        path: '/tour/:slug',
        name: 'Tour',
        component: Tour,
    }
])

export class AppComponent {
    getCopyYear(start) {
        var date = new Date(),
            year = date.getFullYear();

        if (year == start) return year;

        return start + ' - ' + year;
    }
}
