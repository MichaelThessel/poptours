import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ToursService} from '../tours/tours.service';
import {Tour} from '../tours/tour';

@Component({
    selector: 'featured',
    templateUrl: 'app/featured-component/featured.component.html'
})

export class FeaturedComponent {
    tours: Array<Tour> = [];
    featuredTours: Array<Tour> = [];

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _toursService: ToursService
    ) {}

    ngOnInit () {
        this._toursService.getFeaturedTours(2).
            then(tours => this.tours = tours);
    }

    navigateTour(tour: Tour) {
        let link = ['Tour', { slug: tour.slug }];
        this._router.navigate(link);
    }
}
