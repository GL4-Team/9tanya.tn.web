import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieResponse } from '../../../models/Movie/movie-response';
import { MoviesService } from '../service/movies.service';

@Injectable({
  providedIn: 'root'
})
export class TrendingMoviesResolver implements Resolve<MovieResponse> {
  constructor(private movieApiService: MoviesService) {}

  resolve(): Observable<MovieResponse> {
    return this.movieApiService.tredingMovieApiData().pipe(
      catchError(error => {
        console.error('Error fetching trending movies:', error);
        return [];
      })
    );
  }
}
