import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BannerResolver} from "./resolvers/banner.resolver";
import {TrendingMoviesResolver} from "./resolvers/trending.movies.resolver";
import {UpcomingMoviesResolver} from "./resolvers/upcoming.movies.resolver";
import {NowPlayingMoviesResolver} from "./resolvers/now.playing.movies.resolver";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  resolve: {
    bannerData: BannerResolver,
    trendingData: TrendingMoviesResolver,
    upcomingData: UpcomingMoviesResolver,
    nowPlayingData: NowPlayingMoviesResolver
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
