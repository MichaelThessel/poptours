import {Component, OnInit} from '@angular/core';
import {InstagramService} from './instagram.service';

@Component({
    selector: 'instagram',
    templateUrl: 'app/instagram-component/instagram.component.html'
})

export class InstagramComponent {
    posts: Array<Object> = [];

    constructor(private _instagramService: InstagramService) {}

    ngOnInit() {
        this._instagramService.getPosts(4).subscribe(posts => this.posts = posts);
    }
}
