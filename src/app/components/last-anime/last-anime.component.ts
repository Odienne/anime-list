import {Component, OnInit} from '@angular/core';

import {LastAnimeService} from 'src/app/services/last-anime.service';

@Component({
    selector: 'app-last-anime',
    templateUrl: './last-anime.component.html',
    styleUrls: ['./last-anime.component.css']
})
export class LastAnimeComponent implements OnInit {

    animes: any[];

    constructor(private lastanime: LastAnimeService) {
    }


    ngOnInit() {
        this.getAnimes();
    }

    getAnimes() {
        this.lastanime.getLastAnimes()
            .subscribe(data => {
                const myData = [];
                data.anime.forEach(item => {
                    if (!item.r18) {
                        myData.push(item);
                    }
                });
                this.animes = myData;
            });
    }


}
