import {bootstrap} from '@angular/platform-browser-dynamic';
import {config} from './config'
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core'

if (window.location.host == config.domain) {
    enableProdMode();
}

bootstrap(AppComponent);
