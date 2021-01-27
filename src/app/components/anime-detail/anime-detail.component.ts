import {Component, Input, OnInit} from '@angular/core';
import {AnimeDetailService} from '../../services/anime-detail.service';
import {ToastController} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {MyAnimeService} from '../../services/my-anime.service';

const {Share} = Plugins;

@Component({
    selector: 'app-anime-detail',
    templateUrl: './anime-detail.component.html',
    styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {

    // animeid passed as props, used to fetch details
    @Input() animeId: number;
    // will store details on the anime
    anime: object;
    alreadyExisting: object = null;
    user = JSON.parse(localStorage.getItem('user'));

    isFav: boolean;
    isViewed: boolean;
    isInWatchlist: boolean;

    // translation array
    airingStatus = {
        'Currently Airing': 'en cours de diffusion',
        'Finished Airing': 'diffusion terminée'
    };

    constructor(private animeDetailService: AnimeDetailService,
                public toastController: ToastController,
                private myAnimeService: MyAnimeService) {
    }

    ngOnInit() {
        this.getUserAnime(this.user.userId, this.animeId);
        this.getAnimeDetail();
    }

    getAnimeDetail() {
        // anime info provided by service
        this.animeDetailService.getAnimeDetail(this.animeId)
            .subscribe(data => {
                this.anime = data;
            });
    }

    // toasts
    async presentToast(message, color = 'success') {
        const toast = await this.toastController.create({
            message,
            position: 'bottom',
            color,
            duration: 1000
        });
        await toast.present();
    }

    // functions calling service to add anime to personal lists

    addToFavorites(anime) {
        if (this.isFav === true) {
            this.myAnimeService.removeFavorite(this.user.userId, anime.mal_id).subscribe();
        } else {
            if (this.alreadyExisting) {
                this.myAnimeService.updateFavorite(this.user.userId, anime.mal_id).subscribe();
            } else {
                this.myAnimeService.setFavorite(this.user.userId, anime.mal_id).subscribe();
                this.getUserAnime(this.user.userId, this.animeId);
            }
        }


        const verbe = this.isFav ? 'retiré des' : 'ajouté aux';
        const color = this.isFav ? 'warning' : 'success';
        this.presentToast(anime.title + ' ' + verbe + ' favoris', color);
        this.isFav = !this.isFav;
    }

    addToViewedList(anime) {
        if (this.isViewed === true) {
            this.myAnimeService.removeViewed(this.user.userId, anime.mal_id).subscribe();
        } else {
            if (this.alreadyExisting) {
                this.myAnimeService.updateViewed(this.user.userId, anime.mal_id).subscribe();
            } else {
                this.myAnimeService.setViewed(this.user.userId, anime.mal_id).subscribe();
                this.getUserAnime(this.user.userId, this.animeId);
            }
        }

        const verbe = this.isViewed ? 'retiré de' : 'ajouté à';
        const color = this.isViewed ? 'warning' : 'success';
        this.presentToast(anime.title + ' ' + verbe + ' la ViewedList', color);
        this.isViewed = !this.isViewed;
    }

    addToWatchList(anime) {
        if (this.isInWatchlist === true) {
            this.myAnimeService.removeInWatchlist(this.user.userId, anime.mal_id).subscribe();
        } else {
            if (this.alreadyExisting) {
                this.myAnimeService.updateInWatchlist(this.user.userId, anime.mal_id).subscribe();
            } else {
                this.myAnimeService.setInWatchlist(this.user.userId, anime.mal_id).subscribe();
                this.getUserAnime(this.user.userId, this.animeId);
            }
        }

        const verbe = this.isInWatchlist ? 'retiré de' : 'ajouté à';
        const color = this.isInWatchlist ? 'warning' : 'success';
        this.presentToast(anime.title + ' ' + verbe + ' la watchlist', color);
        this.isInWatchlist = !this.isInWatchlist;
    }

    shareAnime(anime) {
        Share.share({
            title: anime.title,
            text: 'Hey regarde ça',
            url: anime.image_url,
            dialogTitle: 'Partarger l\'animé'
        }).catch(() => {
            this.presentToast('Web Share Api n\'est pas disponible', 'warning');
        });
    }

    getUserAnime(userId, animeId) {
        this.myAnimeService.getUserAnime(userId, animeId).subscribe(data => {
            if (data.length > 0) {
                this.alreadyExisting = data;
                const {isFavoris, isViewed, planToWatch} = data[0];
                this.isFav = isFavoris;
                this.isViewed = isViewed;
                this.isInWatchlist = planToWatch;
            }
        });
    }
}
