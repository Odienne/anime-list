import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class JikanService {
    constructor(private httpClient: HttpClient = null) {
    }

    search(parameters: SearchBuilderJikan): string {
        const params = parameters.ToString();
        const query = environment.animeApi + '/search/anime?' + params;
        return query;
    }

    getAnime(id) {
        const query = environment.animeApi + '/anime/' + id;
        return this.httpClient.get(query);
    }
}

export class SearchBuilderJikan {
    type: AnimeType;
    query: string;
    status: AnimeStatus;
    genre: AnimeGenre;
    score: number;
    rated: AnimeRating;
    startDate: Date;
    endDate: Date;
    excludeNSFW: boolean;

    // Va prendre tous les paramètres que l'API peut prendre en compte
    // Et s'ils sont vides, les mettre a undefined
    /**
     * @description search service for Jikan API
     * @param query query input
     * @param type anime type which is a @enum AnimeType
     */
    constructor(
        query: string,
        type?: any,
        genre?: any,
        status?: AnimeStatus,
        score?: any,
        rated?: AnimeRating,
        startDate?: any,
        endDate?: any,
        excludeNSFW?: boolean
    ) {
        this.query = query || undefined;
        this.type = type || undefined;
        this.genre = genre || undefined;
        this.status = status || undefined;
        this.score = score || undefined;
        this.rated = rated || undefined;
        this.startDate = startDate || undefined;
        this.endDate = endDate || undefined;
        this.excludeNSFW = excludeNSFW || true;
    }

    // Va check tous les paramètres que nous lui avons fournis afin de créer la call API parfait
    ToString() {
        // Faire ce process pour toutes les valeurs
        let queryString = '';
        if (this.query !== undefined) {
            queryString += 'q=' + this.query + '&';
        }
        if (this.type !== undefined) {
            queryString += 'type=' + this.type + '&';
        }
        if (this.genre !== undefined) {
            queryString += 'genre=' + this.genre + '&';
        }
        if (this.status !== undefined) {
            queryString += 'status=' + this.status + '&';
        }
        if (this.score !== undefined) {
            queryString += 'score=' + this.score + '&';
        }
        if (this.rated !== undefined) {
            queryString += 'rated=' + this.rated + '&';
        }
        // exclude genre 12 which is nsfw
        if (this.excludeNSFW) {
            queryString += 'genre=12&genre_exclude=0';
        }

        console.log(queryString);
        return queryString;
    }
}

//#region enums
export enum AnimeStatus {
    airing,
    completed,
    complete,
    to_be_aired,
    tba,
    upcoming,
}

export enum AnimeRating {
    g,
    pg,
    pg13,
    r17,
    r,
    rx,
}

export enum AnimeGenre {
    Action = 1,
    Adventure = 2,
    Cars = 3,
    Comedy = 4,
    Dementia = 5,
    Demons = 6,
    Mystery = 7,
    Drama = 8,
    Ecchi = 9,
    Fantasy = 10,
    Game = 11,
    Hentai = 12,
    Historical = 13,
    Horror = 14,
    Kids = 15,
    Magic = 16,
    MartialArts = 17,
    Mecha = 18,
    Music = 19,
    Parody = 20,
    Samurai = 21,
    Romance = 22,
    School = 23,
    SciFi = 24,
    Shoujo = 25,
    ShoujoAi = 26,
    Shounen = 27,
    ShounenAi = 28,
    Space = 29,
    Sports = 30,
    SuperPower = 31,
    Vampire = 32,
    Yaoi = 33,
    Yuri = 34,
    Harem = 35,
    SliceOfLife = 36,
    Supernatural = 37,
    Military = 38,
    Police = 39,
    Psychological = 40,
    Thriller = 41,
    Seinen = 42,
    Josei = 43,
}

export enum AnimeType {
    tv,
    ova,
    movie,
    special,
    ona,
    music,
}

//#endregion
