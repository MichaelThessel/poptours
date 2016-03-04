import {Component, OnInit} from 'angular2/core';

import {Banner} from 'banner';

@Component({
    selector: 'banner',
    templateUrl: 'app/banner-component/banner.component.html',
    inputs: ['banner']
})

export class BannerComponent {
    banner: Banner;
}
