import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovieResponse } from "../../../models/Movie/movie-response";
import { MovieApi } from "../../../models/movie.api";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private toastr : ToastrService) { }

  private handleError(error: HttpErrorResponse,) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    this.toastr.error('Cannot retrieve data from the API.', 'Error', {
      closeButton: true,
      timeOut: 5000,
    });
    return throwError('Something bad happened; please try again later.');
  }

  bannerApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/trending/all/week`)
      .pipe(
        catchError(this.handleError)
      );
  }

  tredingMovieApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/trending/movie/day`) .pipe(
      catchError(this.handleError)
    );
  }

  nowPlayingMovieApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/movie/now_playing`)
      .pipe(
        catchError(this.handleError)
      );
  }

  upcomingMovieApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/movie/upcoming`)
      .pipe(
        catchError(this.handleError)
      );
  }





  fetchActionMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=28`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchAdventureMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=12`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchAnimationMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=16`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchComedyMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=35`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchDocumentaryMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=99`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchScienceFictionMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=878`) .pipe(
      catchError(this.handleError)
    );
  }

  fetchThrillerMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/discover/movie?with_genres=53`) .pipe(
      catchError(this.handleError)
    );
  }
}
