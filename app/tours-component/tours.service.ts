import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {TOURS} from './tours-data';
import {Place} from '../places-component/place';
import {Tour} from '../tours-component/tour';

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
                .subscribe(data => { tour.content = data.text() },
                    err => console.error(err)
                );
            return tour;
        });
    }

    getToursByPlace(place: Place) {
        return Promise.resolve(TOURS).then(
            tours => tours.filter(tour => tour.place == place.slug)
        );
    }

    getFeaturedTours(count: number) {
        return Promise.resolve(TOURS).then(
            tours => this._shuffleTours(tours).slice(0, count)
        );
    }

    _shuffleTours(tours: Array<Tour>) {
        var currentIndex = tours.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = tours[currentIndex];
          tours[currentIndex] = tours[randomIndex];
          tours[randomIndex] = temporaryValue;
        }

        return tours;
    }
}
