import {Component, OnInit} from '@angular/core';
import {JikanService} from '../services/jikan.service';
import {MyAnimeService} from '../services/my-anime.service';

@Component({
    selector: 'app-favoris-p',
    templateUrl: './favoris.page.html',
    styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

    favoris;
    computedFavs = [];
    user = JSON.parse(localStorage.getItem('user'));

    constructor(private jikanService: JikanService, private myAnimeService: MyAnimeService) {
        this.myAnimeService.getFavoritesOfUser(this.user.userId).subscribe(data => {
            data.map(item => {
                const {animeId} = item;
                this.jikanService.getAnime(animeId).subscribe(anime => {
                    this.computedFavs.push(anime);
                });
            });
        });
    }

    ngOnInit() {
    }

}
