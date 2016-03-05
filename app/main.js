System.register(['angular2/platform/browser', './config', './app.component', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, config_1, app_component_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            if (window.location.host == config_1.config.domain) {
                core_1.enableProdMode();
            }
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map