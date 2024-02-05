import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MovieDetailResponse} from "../../../models/Movie-Detail/movie-detail-response";
import {MoviesService} from "../../home/service/movies.service";
import {DetailsService} from "../services/details.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<MovieDetailResponse|null> {
  constructor(private movieApiService: DetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetailResponse|null> {
    const movieId = route.paramMap.get('id');
    return this.movieApiService.getMovieDetails(movieId).pipe(
      catchError(error => {
        console.error('Error fetching movie details:', error);
        return of(null);
      })
    );
  }
}
