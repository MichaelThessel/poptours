import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {BannerComponent} from '../banner-component/banner.component';
import {Banner} from '../banner-component/banner';
import {FeaturedComponent} from '../featured-component/featured.component';
import {InstagramComponent} from '../instagram-component/instagram.component';
import {PlacesService} from '../places-component/places.service';
import {Place} from '../places-component/place';

@Component({
    selector: 'my-home',
    templateUrl: './app/home-component/home.component.html',
    directives: [BannerComponent, FeaturedComponent, InstagramComponent]
})

export class HomeComponent implements OnInit {
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
