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
export class SearchService {

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



  getSearchMovie(data: any): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${MovieApi.BASE_URL}/search/movie?query=${data.movieName}&include_adult=false`) .pipe(
      catchError(this.handleError)
    );
  }


}
