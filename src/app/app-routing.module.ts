import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPreloadingStrategy} from "./loading-strategies/custom-preloading-strategy";
const routes: Routes = [




  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) , data: { preload: true }},
  { path: 'movie', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule) },
  { path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

