import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MoviesService} from "../../home/service/movies.service";
import {MovieResponse} from "../../../models/Movie/movie-response";
import {DetailsService} from "../services/details.service";

@Injectable({
  providedIn: 'root'
})
export class SimilarMoviesResolver implements Resolve<MovieResponse|null> {
  constructor(private movieApiService: DetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieResponse|null> {
    const movieId = route.paramMap.get('id');
    return this.movieApiService.getSimilarMovies(movieId).pipe(
      catchError(error => {
        console.error('Error fetching similar movies:', error);
        return of(null);
      })
    );
  }
}
