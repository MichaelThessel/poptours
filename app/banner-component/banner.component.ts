import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Banner} from './banner';

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
