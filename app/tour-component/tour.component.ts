import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {BannerComponent} from '../banner-component/banner.component';
import {Banner} from '../banner-component/banner';
import {BreadcrumbComponent} from '../breadcrumb-component/breadcrumb.component';
import {Breadcrumb} from '../breadcrumb-component/breadcrumb';
import {Tour} from './tour';
import {Place} from '../places-component/place';

import {ToursService} from '../tours-component/tours.service';
import {PlacesService} from '../places-component/places.service';

@Component({
    selector: 'tour',
    templateUrl: 'app/tour-component/tour.component.html',
    directives: [BannerComponent, BreadcrumbComponent]
})

export class TourComponent implements OnInit {
    bannerSettings: Banner;
    breadcrumbSettings: Array<Breadcrumb> = [];
    tour: Tour;
    place: Place;

    constructor(
        private _routeParams: RouteParams,
        private _toursService: ToursService,
        private _placesService: PlacesService
    ) {}

    ngOnInit() {
        let slug = this._routeParams.get('slug');

        this._toursService.getTourBySlug(slug).
            then(tour => this.tour = tour).
            then(() => this.bannerSettings = {
                image: 'media/tours/' + this.tour.id + '/banner.jpg'
            }).
            then(() => this._placesService.getPlaceBySlug(this.tour.place).
                then(place => this.place = place).
                then(() => {
                    this.breadcrumbSettings.push({ title: this.place.name, link: ['Tours', { slug: this.place.slug }] });
                    this.breadcrumbSettings.push({ title: this.tour.title, link: [] });
                })
            );
    }
}
