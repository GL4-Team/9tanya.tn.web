import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovieResponse } from "../../../models/Movie/movie-response";
import { MovieDetailResponse } from "../../../models/Movie-Detail/movie-detail-response";
import { VideosResponse } from "../../../models/Video/videos-response";
import { CreditsResponse } from "../../../models/Cast/credits-response";
import { MovieApi } from "../../../models/movie.api";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

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


  getSimilarMovies(movieId: string | null): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/movie/${movieId}/similar?include_adult=false`)
      .pipe(
        catchError(this.handleError)
      );
  }


  getMovieDetails(data: any): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${MovieApi.BASE_URL}/movie/${data}`) .pipe(
      catchError(this.handleError)
    );
  }

  getMovieVideo(data: any): Observable<VideosResponse> {
    return this.http.get<VideosResponse>(`${MovieApi.BASE_URL}/movie/${data}/videos`) .pipe(
      catchError(this.handleError)
    );
  }

  getMovieCast(data: any): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${MovieApi.BASE_URL}/movie/${data}/credits`) .pipe(
      catchError(this.handleError)
    );
  }


}
