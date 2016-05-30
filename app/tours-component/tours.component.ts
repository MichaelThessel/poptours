import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {BannerComponent} from '../banner-component/banner.component';
import {Banner} from '../banner-component/banner';
import {BreadcrumbComponent} from '../breadcrumb-component/breadcrumb.component';
import {Breadcrumb} from '../breadcrumb-component/breadcrumb';
import {ToursService} from './tours.service';
import {PlacesService} from '../places-component/places.service';
import {Place} from '../places-component/place';
import {Tour} from '../tour-component/tour';

@Component({
    selector: 'tours',
    templateUrl: 'app/tours-component/tours.component.html',
    directives: [BannerComponent, BreadcrumbComponent]
})

export class ToursComponent implements OnInit {
    bannerSettings: Banner;
    breadcrumbSettings: Array<Breadcrumb> = [];
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
                    .then(() => this.bannerSettings = this.place.banner)
                    .then(() => this.breadcrumbSettings.push({ title: this.place.name, link: [] })));
    }

    navigateTour(tour: Tour) {
        let link = ['Tour', { slug: tour.slug }];
        this._router.navigate(link);
    }
}
