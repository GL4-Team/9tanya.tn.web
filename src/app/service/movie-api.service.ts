import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {MovieResponse} from "../models/Movie/movie-response";
import {MovieDetailResponse} from "../models/Movie-Detail/movie-detail-response";
import {VideosResponse} from "../models/Video/videos-response";
import {CreditsResponse} from "../models/Cast/credits-response";
import {MovieApi} from "../models/movie.api";

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http:HttpClient ) { }
  baseurl="https://api.themoviedb.org/3";
  apikey= "c1d4cc70ad687995e591303078942b2b";

  bannerApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  tredingMovieApiData():Observable<MovieResponse>{
    console.log( 'movie#');
    return this.http.get<MovieResponse>(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);  }


  nowPlayingMovieApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/movie/now_playing?api_key=${this.apikey}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  upcomingMovieApiData(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getSimilarMovies(movieId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/movie/${movieId}/similar?api_key=${this.apikey}&include_adult=false`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getSearchMovie(data: any): Observable<MovieResponse> {
    console.log(data, 'movie#');
    return this.http.get<MovieResponse>(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}&include_adult=false`);
  }

  getMovieDetails(data:any):Observable<MovieDetailResponse>{
    return this.http.get<MovieDetailResponse>(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo(data: any): Observable<VideosResponse> {
    return this.http.get<VideosResponse>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: any): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  fetchActionMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

}
