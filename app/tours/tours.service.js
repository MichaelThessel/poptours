System.register(['angular2/core', './tours-data'], function(exports_1, context_1) {
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
    var core_1, tours_data_1;
    var ToursService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tours_data_1_1) {
                tours_data_1 = tours_data_1_1;
            }],
        execute: function() {
            ToursService = (function () {
                function ToursService() {
                }
                ToursService.prototype.getTours = function () {
                    return Promise.resolve(tours_data_1.TOURS);
                };
                ToursService.prototype.getTour = function (slug) {
                    return Promise.resolve(tours_data_1.TOURS).then(function (tours) { return tours.filter(function (tour) { return tour.slug == slug; })[0]; });
                };
                ToursService.prototype.getToursByPlace = function (place) {
                    return Promise.resolve(tours_data_1.TOURS).then(function (tours) { return tours.filter(function (tour) { return tour.place == place.slug; }); });
                };
                ToursService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToursService);
                return ToursService;
            }());
            exports_1("ToursService", ToursService);
        }
    }
});
//# sourceMappingURL=tours.service.js.map