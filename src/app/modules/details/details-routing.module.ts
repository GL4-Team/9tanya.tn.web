import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieDetailsResolver} from "./resolvers/movieDetails.resolver";
import {MovieCastResolver} from "./resolvers/movieCast.resolver";
import {SimilarMoviesResolver} from "./resolvers/similarMovies.resolver";

const routes: Routes = [
  { path: ':id',
    component: MovieDetailsComponent,
    resolve: {
      movieData: MovieDetailsResolver,
      cast: MovieCastResolver,
      similarMovies: SimilarMoviesResolver
    }
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
