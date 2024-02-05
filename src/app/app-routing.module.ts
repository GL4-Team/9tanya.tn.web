import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";
import {MovieDetailsResolver} from "./resolvers/movieDetailsPage/movieDetails.resolver";
import {MovieCastResolver} from "./resolvers/movieDetailsPage/movieCast.resolver";
import {SimilarMoviesResolver} from "./resolvers/movieDetailsPage/similarMovies.resolver";
import {BannerResolver} from "./resolvers/homePage/banner.resolver";
import {TrendingMoviesResolver} from "./resolvers/homePage/trending.movies.resolver";
import {UpcomingMoviesResolver} from "./resolvers/homePage/upcoming.movies.resolver";
import {NowPlayingMoviesResolver} from "./resolvers/homePage/now.playing.movies.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      bannerData: BannerResolver,
      trendingData: TrendingMoviesResolver,
      upcomingData: UpcomingMoviesResolver,
      nowPlayingData: NowPlayingMoviesResolver
    }
  },

  {path:'search',component:SearchComponent},


  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {
      movieData: MovieDetailsResolver,
      cast: MovieCastResolver,
      similarMovies: SimilarMoviesResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
