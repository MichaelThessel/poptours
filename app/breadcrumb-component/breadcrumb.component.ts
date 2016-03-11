import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'breadcrumbs',
    templateUrl: 'app/breadcrumb-component/breadcrumb.component.html',
    inputs: ['breadcrumbs']
})

export class BreadcrumbComponent {
    breadcrumbs: Array<Object> = [];

    constructor(private _router: Router) {}

    navigate(link) {
        this._router.navigate(link);
    }
}
