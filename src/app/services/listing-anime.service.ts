import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SearchBuilderJikan, JikanService } from './jikan.service';

@Injectable({
    providedIn: 'root'
})
export class ListingAnimeService {

    liste: Observable<any>;

    constructor(private http: HttpClient) {
    }

    /**
     * @description call api and retrieve data
     * @param searchValue for query on name
     */
    searchAnimes(searchValue): Observable<any> {
        const t = new JikanService();
        const query = new SearchBuilderJikan(searchValue);

        return this.http.get(t.search(query));
    }
}