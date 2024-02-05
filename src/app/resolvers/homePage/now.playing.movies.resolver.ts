import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieResponse } from '../../models/Movie/movie-response';
import { MovieApiService } from '../../service/movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingMoviesResolver implements Resolve<MovieResponse> {
  constructor(private movieApiService: MovieApiService) {}

  resolve(): Observable<MovieResponse> {
    return this.movieApiService.nowPlayingMovieApiData().pipe(
      catchError(error => {
        console.error('Error fetching now playing movies:', error);
        return [];
      })
    );
  }
}
