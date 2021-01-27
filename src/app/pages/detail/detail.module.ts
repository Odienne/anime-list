import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DetailPageRoutingModule} from './detail-routing.module';

import {DetailPage} from './detail.page';
import {AnimeDetailComponent} from '../../components/anime-detail/anime-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailPageRoutingModule
    ],
    declarations: [DetailPage, AnimeDetailComponent]
})
export class DetailPageModule {
}
