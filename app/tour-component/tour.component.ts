import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {BannerComponent} from '../banner-component/banner.component';
import {Banner} from '../banner-component/banner';
import {Tour} from './tour';

import {ToursService} from '../tours-component/tours.service';

@Component({
    selector: 'tour',
    templateUrl: 'app/tour-component/tour.component.html',
    directives: [BannerComponent]
})

export class TourComponent implements OnInit {
    bannerSettings: Banner;
    tour: Tour;

    constructor(
        private _routeParams: RouteParams,
        private _toursService: ToursService
    ) {}

    ngOnInit() {
        let slug = this._routeParams.get('slug');

        this._toursService.getTourBySlug(slug).
            then(tour => this.tour = tour).
            then(banner => this.bannerSettings = {
                image: 'media/tours/' + this.tour.id + '/banner.jpg'
            }
        );
    }
}
