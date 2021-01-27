import {JsonPipe} from '@angular/common';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JikanService, SearchBuilderJikan} from './jikan.service';

@Injectable({
    providedIn: 'root'
})
export class MyAnimeService {
    constructor(private http: HttpClient) {
    }

    viewedAnime() {
        // Récupération des animés vus en fonction de l'utilisateur
        // TODO : Récupération depuis notre base
        // Va utiliser la même vue que pour les favoris mais avec un autre jeu de données
        // Lorsqu'on va cliquer sur un élément de la liste, nous allons atterir sur une description plus détaillée de l'animé
        fetch(environment.localApi + '/user/anime')
            .then((animes) => {
                return JSON.stringify(animes);
            })
            .catch((err) => {
                return console.error(err);
            });
    }

    // query one anime by user and animeId : to check if already in db
    getUserAnime(id, animeId): Observable<any> {
        return this.http.get(environment.localApi + '/api/' + id + '/' + parseInt(animeId, 0));
    }

    getFavoritesOfUser(id): Observable<any> {
        return this.http.get(environment.localApi + '/api/' + id + '/favorites/');
    }

    getWatchlistOfUser(id): Observable<any> {
        return this.http.get(environment.localApi + '/api/' + id + '/plantowatch/');
    }

    getViewedListOfUser(id): Observable<any> {
        return this.http.get(environment.localApi + '/api/' + id + '/viewed/');
    }

    getCurrentUser(id) {
        // recup current user with localStorage
        fetch(environment.localApi + '/user/' + id)
            .then((user) => {
                return JSON.stringify(user);
            })
            .catch((err) => {
                return console.error(err);
            });
    }

    setFavorite(id, animeId): Observable<any> {
        return this.http.post(environment.localApi + '/api/' + id + '/' + animeId + '/favorites/', {}, {});
    }

    setInWatchlist(id, animeId): Observable<any> {
        return this.http.post(environment.localApi + '/api/' + id + '/' + animeId + '/plantowatch/', {}, {});
    }

    setViewed(id, animeId): Observable<any> {
        return this.http.post(environment.localApi + '/api/' + id + '/' + animeId + '/viewed/', {}, {});
    }

    updateFavorite(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/' + id + '/' + animeId + '/favorites/', {}, {});
    }

    updateInWatchlist(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/' + id + '/' + animeId + '/plantowatch/', {}, {});
    }

    updateViewed(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/' + id + '/' + animeId + '/viewed/', {}, {});
    }

    removeFavorite(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/remove/' + id + '/' + animeId + '/favorites/', {}, {});
    }

    removeInWatchlist(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/remove/' + id + '/' + animeId + '/plantowatch/', {}, {});
    }

    removeViewed(id, animeId): Observable<any> {
        return this.http.put(environment.localApi + '/api/remove/' + id + '/' + animeId + '/viewed/', {}, {});
    }
}
