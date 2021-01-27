import {Component, OnInit} from '@angular/core';
import {ListingAnimeService} from '../../services/listing-anime.service';


@Component({
    selector: 'app-listing-anime',
    templateUrl: './listing-anime.component.html',
    styleUrls: ['./listing-anime.component.scss'],
})
export class ListingAnimeComponent implements OnInit {
    // linked to input
    searchValue: string;

    // array looped in html, gets search results
    animes: any[];

    // WIP favs
    favoris = [];

    constructor(private listingAnimeService: ListingAnimeService) {
    }

    ngOnInit() {
    }

    /**
     * @description subscription to service fetching animes by searchValue
     */
    searchAnimes(searchValue): void {
        if (!searchValue || searchValue.trim() === '' || searchValue.length < 3) {
            return;
        }
        this.listingAnimeService.searchAnimes(searchValue)
            .subscribe(data => {
                const myData = [];
                data.results.forEach(item => {
                    myData.push(item);
                });
                this.animes = myData;
            });
    }

    /**
     * @description WIP
     * @param anime : item from array animes
     */
    saveToFav(anime) {
        console.log(anime);
        console.log('save to fav');
        const present = this.favoris.filter(item => item === anime);
        console.log(present);
        if (present.length !== 0) {
            this.favoris = this.favoris.filter(item => item !== anime);
        } else {
            this.favoris.push(anime);
        }
        console.log(this.favoris);
    }

    /**
     * @description WIP prints anime item details
     * @param anime an item from animes array
     */
    // function moved to anime-detail
    printDetails(anime) {
        console.log(anime);
    }

    // function moved to anime-detail
    saveToWatchlist(anime) {
        console.log(anime);
    }

    // function moved to anime-detail
    saveToViewedList(anime) {
        console.log(anime);
    }
}
