import {bootstrap} from 'angular2/platform/browser'
import {config} from './config'
import {AppComponent} from './app.component'
import {enableProdMode} from 'angular2/core'

if (window.location.host == config.domain) {
    enableProdMode();
}

bootstrap(AppComponent);
