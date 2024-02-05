import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MovieApiService} from "../../service/movie-api.service";
import {MovieResponse} from "../../models/Movie/movie-response";

@Injectable({
  providedIn: 'root'
})
export class SimilarMoviesResolver implements Resolve<MovieResponse|null> {
  constructor(private movieApiService: MovieApiService) {}

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
