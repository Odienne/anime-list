import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    animeId: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getAnimeId();
    }

    getAnimeId() {
        this.animeId = this.route.snapshot.params.id;
    }

}
