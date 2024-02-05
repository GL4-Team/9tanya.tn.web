import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MoviesService} from "../../home/service/movies.service";
import {CreditsResponse} from "../../../models/Cast/credits-response";
import {DetailsService} from "../services/details.service";

@Injectable({
  providedIn: 'root'
})
export class MovieCastResolver implements Resolve<CreditsResponse|null> {
  constructor(private movieApiService: DetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CreditsResponse|null> {
    const movieId = route.paramMap.get('id');
    return this.movieApiService.getMovieCast(movieId).pipe(
      catchError(error => {
        console.error('Error fetching movie cast:', error);
        return of(null);
      })
    );
  }
}
