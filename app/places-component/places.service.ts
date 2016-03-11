import {Injectable} from 'angular2/core';
import {PLACES} from './places-data';

@Injectable() export class PlacesService {
    getPlaces() {
        return Promise.resolve(PLACES);
    }

    getPlaceBySlug(slug: string) {
        return Promise.resolve(PLACES).then(
            places => places.filter(place => place.slug == slug)[0]
        );
    }
}
