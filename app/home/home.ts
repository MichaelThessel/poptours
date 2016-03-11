import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {BannerComponent} from '../banner-component/banner.component';
import {FeaturedComponent} from '../featured-component/featured.component';
import {PlacesService} from '../places/places.service';
import {Place} from '../places/place';
import {Banner} from '../banner-component/banner';

@Component({
    selector: 'my-home',
    templateUrl: './app/home/home.html',
    directives: [BannerComponent, FeaturedComponent]
})

export class Home implements OnInit {
    bannerSettings: Banner = {
        image: 'media/home/header.jpg',
    };
    places: Array<Place> = [];

    constructor(private _router: Router, private _placesService: PlacesService) {}

    ngOnInit() {
        this._placesService.getPlaces().
            then(places => this.places = places);
    }

    navigateTours(place: Place) {
        let link = ['Tours', { slug: place.slug }];
        this._router.navigate(link);
    }
}
