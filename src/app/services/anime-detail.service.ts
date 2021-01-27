import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnimeDetailService {
    anime: Observable<any>;

    constructor(private http: HttpClient) {
    }

    /**
     * @description call api and retrieve data of one anime
     * @param id for query anime id
     */
    getAnimeDetail(id): Observable<any> {
        // exclude NSFW genre in request, search by term
        return this.http.get('https://api.jikan.moe/v3/anime/' + id);
    }
}
