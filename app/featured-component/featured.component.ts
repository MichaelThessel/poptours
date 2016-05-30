import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {ToursService} from '../tours-component/tours.service';
import {Tour} from '../tour-component/tour';

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
