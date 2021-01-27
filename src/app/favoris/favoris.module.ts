import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavorisPageRoutingModule } from './favoris-routing.module';

import { FavorisPage } from './favoris.page';

import { MenuProfilComponent } from '../components/menu-profil/menu-profil.component';
import { FavorisComponent } from '../components/favoris/favoris.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavorisPageRoutingModule
  ],
  declarations: [
    FavorisPage,
    MenuProfilComponent,
    FavorisComponent
  ]
})
export class FavorisPageModule {}
