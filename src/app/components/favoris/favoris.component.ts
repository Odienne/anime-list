import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
    selector: 'app-favoris-c',
    templateUrl: './favoris.component.html',
    styleUrls: ['./favoris.component.scss'],
})
export class FavorisComponent implements OnInit {

    favoris = this.router.paramMap.get('favorites');

    constructor(private router: ActivatedRouteSnapshot) {
    }

    ngOnInit() {
    }

    // delete(id) {
    //     for (let i = 0; i < this.favoris.array.length; i++) {
    //         if (this.favoris.array[i].id === id) {
    //             this.favoris.array.splice(i, 1);
    //         }
    //     }
    // }

}
