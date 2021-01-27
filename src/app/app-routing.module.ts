import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {AuthComponent} from './components/auth/auth.component';
import {DetailPage} from './pages/detail/detail.page';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'vues',
        loadChildren: () => import('./vues/vues.module').then(m => m.VuesPageModule)
    },
    {
        path: 'favoris',
        loadChildren: () => import('./favoris/favoris.module').then(m => m.FavorisPageModule)
    },
    {
        path: 'a-voir',
        loadChildren: () => import('./a-voir/a-voir.module').then(m => m.AVoirPageModule)
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'detail/:id',
        component: DetailPage,
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
