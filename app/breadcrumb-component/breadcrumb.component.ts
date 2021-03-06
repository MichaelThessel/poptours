import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Breadcrumb} from './breadcrumb';

@Component({
    selector: 'breadcrumbs',
    templateUrl: 'app/breadcrumb-component/breadcrumb.component.html',
    inputs: ['breadcrumbs']
})

export class BreadcrumbComponent {
    breadcrumbs: Array<Breadcrumb> = [];

    constructor(private _router: Router) {}

    navigate(link) {
        this._router.navigate(link);
    }
}
