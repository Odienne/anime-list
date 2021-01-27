import { Component, OnInit } from '@angular/core';
import {JikanService} from "../services/jikan.service";
import {MyAnimeService} from "../services/my-anime.service";

@Component({
  selector: 'app-a-voir',
  templateUrl: './a-voir.page.html',
  styleUrls: ['./a-voir.page.scss'],
})
export class AVoirPage implements OnInit {

  watchlist;
  computedWatchlist = [];
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private jikanService: JikanService, private myAnimeService: MyAnimeService) {
    this.myAnimeService.getWatchlistOfUser(this.user.userId).subscribe(data => {
      data.map(item => {
        const {animeId} = item;
        this.jikanService.getAnime(animeId).subscribe(anime => {
          this.computedWatchlist.push(anime);
        });
      });
    });
  }

  ngOnInit() {
  }

}
