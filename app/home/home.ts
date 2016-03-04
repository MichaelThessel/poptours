import {Component} from 'angular2/core';

import {BannerComponent} from '../banner-component/banner.component';

@Component({
    selector: 'my-home',
    templateUrl: './app/home/home.html',
    directives: [BannerComponent]
})

export class Home {
    bannerSettings: Banner = {
        image: 'media/home/header.jpg',
        heading: 'Pop Tours',
        subText: 'place based political tours'
    };
}
