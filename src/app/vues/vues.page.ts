import {Component, OnInit} from '@angular/core';
import {JikanService} from '../services/jikan.service';
import {MyAnimeService} from '../services/my-anime.service';

@Component({
    selector: 'app-vues',
    templateUrl: './vues.page.html',
    styleUrls: ['./vues.page.scss'],
})
export class VuesPage implements OnInit {

    viewed;
    computedViewed = [];
    user = JSON.parse(localStorage.getItem('user'));

    constructor(private jikanService: JikanService, private myAnimeService: MyAnimeService) {
        this.myAnimeService.getViewedListOfUser(this.user.userId).subscribe(data => {
            console.log(data);
            data.map(item => {
                const {animeId} = item;
                this.jikanService.getAnime(animeId).subscribe(anime => {
                    this.computedViewed.push(anime);
                });
            });
        });
    }

    ngOnInit() {
    }

}
