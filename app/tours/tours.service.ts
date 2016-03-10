import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {TOURS} from './tours-data';
import {Place} from './tour';

@Injectable() export class ToursService {

    constructor(private http: Http) {}

    getTours() {
        return Promise.resolve(TOURS);
    }

    getTourBySlug(slug: string) {
        return Promise.resolve(TOURS).then(
            tours => tours.filter(tour => tour.slug == slug)[0]
        ).then((tour) => {
            this.http.get('/media/tours/' + tour.id + '/content.html')
                .subscribe(data => { tour.content = data._body },
                    err => console.error(err),
                );
            return tour;
        });
    }

    getToursByPlace(place: Place) {
        return Promise.resolve(TOURS).then(
            tours => tours.filter(tour => tour.place == place.slug)
        );
    }
}
