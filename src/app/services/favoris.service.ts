import {Injectable} from '@angular/core';
import {MyAnimeService} from './my-anime.service';

@Injectable({
    providedIn: 'root'
})
export class FavorisService {
    array;

    constructor(private myAnimeService: MyAnimeService) {
        this.getFavoris();
    }

    getFavoris() {
        this.myAnimeService.getFavoritesOfUser(JSON.parse(localStorage.getItem('user')).userId).subscribe();
    }

    deleteFavoris() {
    }
}
