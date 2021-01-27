import {Component, OnInit} from '@angular/core';
import {MyAnimeService} from '../../services/my-anime.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu-profil',
    templateUrl: './menu-profil.component.html',
    styleUrls: ['./menu-profil.component.scss'],
})
export class MenuProfilComponent implements OnInit {

    userId = localStorage.getItem('userId');
    user = JSON.parse(localStorage.getItem('user'));
    favorites;
    watchlist;
    viewed;

    constructor(private myAnimeService: MyAnimeService, private router: Router) {
        // this.getFavorites();
        // this.getWatchlist();
        // this.getViewedList();
    }

    ngOnInit() {
    }

/*    getFavorites() {
        this.favorites = this.myAnimeService.getFavoritesOfUser(this.user.userId).subscribe(data => {
            this.favorites = JSON.stringify(data);
            console.log('favs', this.favorites);
        });
    }

    getWatchlist() {
        console.log('getWatchlist');
        this.watchlist = this.myAnimeService.getWatchlistOfUser(this.user.userId).subscribe(data => {
            this.watchlist = JSON.stringify(data);
            console.log('watchlist', this.watchlist);
        });
    }

    getViewedList() {
        console.log('getViewed');
        this.viewed = this.myAnimeService.getViewedListOfUser(this.user.userId).subscribe(data => {
            this.viewed = JSON.stringify(data);
            console.log('viewed', this.viewed);
        });
    }*/

    logout() {
        localStorage.setItem('user', null);
        this.router.navigate(['']);
    }
}
