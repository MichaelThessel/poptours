import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {ToursService} from './tours.service';
import {Place} from './tour';
import {PlacesService} from '../places/places.service';

@Component({
    selector: 'tours',
    templateUrl: 'app/tours/tours.html',
})

export class Tours implements OnInit {
    tours: Tours[] = [];
    place: Place;

    constructor(
        private _routeParams: RouteParams,
        private _toursService: ToursService,
        private _placesService: PlacesService
    ) {}

    ngOnInit() {
        let slug = this._routeParams.get('slug');

        this._placesService.getPlace(slug).
            then(place => this.place = place).
            then(
                tours => this._toursService.getToursByPlace(this.place)
                    .then(tours => this.tours = tours);
            );

    }
}
