import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {BannerComponent} from '../banner-component/banner.component';
import {PlacesService} from '../places/places.service';
import {Place} from '../places/place';

@Component({
    selector: 'my-home',
    templateUrl: './app/home/home.html',
    directives: [BannerComponent]
})

export class Home implements OnInit {
    bannerSettings: Banner = {
        image: 'media/home/header.jpg',
        subText: 'place based political tours'
    };

    constructor(private _router: Router, private _placesService: PlacesService) {}

    ngOnInit() {
        this._placesService.getPlaces().
            then(places => this.places = places);
    }

    selectPlace(place: Place) {
        let link = ['Tours', { slug: place.slug }];
        this._router.navigate(link);
    }
}
