import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    directives: [ROUTER_DIRECTIVES]
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefasult: true,
    }
])

export class AppComponent {}
