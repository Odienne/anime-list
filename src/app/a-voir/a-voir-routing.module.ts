import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AVoirPage } from './a-voir.page';

const routes: Routes = [
  {
    path: '',
    component: AVoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AVoirPageRoutingModule {}
