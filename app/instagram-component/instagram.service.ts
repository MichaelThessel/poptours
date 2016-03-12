import {Injectable} from 'angular2/core';
import {Jsonp} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable() export class InstagramService {
    data: Array<Object> = [];

    constructor(private _jsonp: Jsonp) {}

    getPosts(itemCount: number) {
        var url = 'https://api.instagram.com/v1/users/2369125217/media/recent?access_token=2369125217.ff6c53e.2d2c7524aa224536bb681c5b712753c4&callback=__ng_jsonp__.__req0.finished';

        if (this.data.length) {
            // Don't execute remote request
            return Observable.create(observer => {
                observer.next(this._shuffle(this.data.slice()).slice(0, itemCount));
                observer.complete();
            });
        } else {
            // Fetch images from instagram API
            return this._jsonp.request(url).map(
                res => {
                    this.data = res.json().data;
                    return this._shuffle(this.data.slice()).slice(0, itemCount);
                }
            );
        }

    }

    _shuffle(array: Array<Object>) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
