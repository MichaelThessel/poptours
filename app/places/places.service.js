System.register(['angular2/core', './places-data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, places_data_1;
    var PlacesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (places_data_1_1) {
                places_data_1 = places_data_1_1;
            }],
        execute: function() {
            PlacesService = (function () {
                function PlacesService() {
                }
                PlacesService.prototype.getPlaces = function () {
                    return Promise.resolve(places_data_1.PLACES);
                };
                PlacesService.prototype.getPlaceBySlug = function (slug) {
                    return Promise.resolve(places_data_1.PLACES).then(function (places) { return places.filter(function (place) { return place.slug == slug; })[0]; });
                };
                PlacesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlacesService);
                return PlacesService;
            }());
            exports_1("PlacesService", PlacesService);
        }
    }
});
//# sourceMappingURL=places.service.js.map