System.register(['angular2/core', 'angular2/router', '../banner-component/banner.component', './tours.service', '../places/places.service'], function(exports_1, context_1) {
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
    var core_1, router_1, banner_component_1, tours_service_1, places_service_1;
    var Tours;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            },
            function (tours_service_1_1) {
                tours_service_1 = tours_service_1_1;
            },
            function (places_service_1_1) {
                places_service_1 = places_service_1_1;
            }],
        execute: function() {
            Tours = (function () {
                function Tours(_router, _routeParams, _toursService, _placesService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._toursService = _toursService;
                    this._placesService = _placesService;
                    this.tours = [];
                }
                Tours.prototype.ngOnInit = function () {
                    var _this = this;
                    var slug = this._routeParams.get('slug');
                    this._placesService.getPlaceBySlug(slug).
                        then(function (place) { return _this.place = place; }).
                        then(function (tours) { return _this._toursService.getToursByPlace(_this.place)
                        .then(function (tours) { return _this.tours = tours; })
                        .then(function (banner) { return _this.bannerSettings = _this.place.banner; }); });
                    ;
                };
                Tours.prototype.navigateTour = function (tour) {
                    var link = ['Tour', { slug: tour.slug }];
                    this._router.navigate(link);
                };
                Tours = __decorate([
                    core_1.Component({
                        selector: 'tours',
                        templateUrl: 'app/tours/tours.html',
                        directives: [banner_component_1.BannerComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, tours_service_1.ToursService, places_service_1.PlacesService])
                ], Tours);
                return Tours;
            }());
            exports_1("Tours", Tours);
        }
    }
});
//# sourceMappingURL=tours.js.map