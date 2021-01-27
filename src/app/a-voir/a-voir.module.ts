import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AVoirPageRoutingModule } from './a-voir-routing.module';

import { AVoirPage } from './a-voir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AVoirPageRoutingModule
  ],
  declarations: [AVoirPage]
})
export class AVoirPageModule {}
