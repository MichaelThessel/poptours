import {Injectable} from 'angular2/core';
import {TOURS} from './tours-data';
import {Place} from './tour';
import {PlacesService} from '../places/places.service';

@Injectable() export class ToursService {
    getTours() {
        return Promise.resolve(TOURS);
    }

    getTour(slug: string) {
        return Promise.resolve(TOURS).then(
            tours => tours.filter(tour => tour.slug == slug)[0]
        );
    }

    getToursByPlace(place: Place) {
        return Promise.resolve(TOURS).then(
            tours => tours.filter(tour => tour.place == place.slug)
        );
    }
}
