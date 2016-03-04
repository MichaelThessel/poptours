import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Banner} from 'banner';

@Component({
    selector: 'banner',
    templateUrl: 'app/banner-component/banner.component.html',
    inputs: ['banner']
})

export class BannerComponent {
    banner: Banner;

    constructor(private _router: Router) {}

    navigateHome() {
        this._router.navigate(['Home']);
    }
}
