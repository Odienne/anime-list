import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuesPageRoutingModule } from './vues-routing.module';

import { VuesPage } from './vues.page';

import { MenuProfilComponent } from '../components/menu-profil/menu-profil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuesPageRoutingModule
  ],
  declarations: [
    VuesPage,
    MenuProfilComponent
  ]
})
export class VuesPageModule {}
