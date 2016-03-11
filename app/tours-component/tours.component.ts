import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {BannerComponent} from '../banner-component/banner.component';

import {ToursService} from './tours.service';
import {PlacesService} from '../places-component/places.service';
import {Place} from '../places-component/place';
import {Tour} from '../tours-component/tour';
import {Banner} from '../banner-component/banner';

@Component({
    selector: 'tours',
    templateUrl: 'app/tours-component/tours.component.html',
    directives: [BannerComponent]
})

export class ToursComponent implements OnInit {
    bannerSettings: Banner;
    tours: Array<Tour> = [];
    place: Place;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _toursService: ToursService,
        private _placesService: PlacesService
    ) {}

    ngOnInit() {
        let slug = this._routeParams.get('slug');

        this._placesService.getPlaceBySlug(slug).
            then(place => this.place = place).
            then(
                tours => this._toursService.getToursByPlace(this.place)
                    .then(tours => this.tours = tours)
                    .then(banner => this.bannerSettings = this.place.banner)
            );
    }

    navigateTour(tour: Tour) {
        let link = ['Tour', { slug: tour.slug }];
        this._router.navigate(link);
    }
}
