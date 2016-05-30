import {Component} from '@angular/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HomeComponent} from './home-component/home.component';
import {ToursComponent} from './tours-component/tours.component';
import {TourComponent} from './tour-component/tour.component';
import {ToursService} from './tours-component/tours.service';
import {PlacesService} from './places-component/places.service';
import {InstagramService} from './instagram-component/instagram.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, JSONP_PROVIDERS, ToursService, PlacesService, InstagramService],
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
