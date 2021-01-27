import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LastAnimeService {

    constructor(private http: HttpClient) {

    }

    getLastAnimes(): Observable<any> {
        return this.http.get('https://api.jikan.moe/v3/season');
    }
}
