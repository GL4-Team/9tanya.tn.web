import { MovieApi } from "../movie.api";

export class Movie {
  adult: boolean | null;
  backdrop_path: string;
  genre_ids: number[] | null;
  id: number | null;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;


  constructor(adult: boolean | null, backdrop_path: string, genre_ids: number[] | null, id: number | null, original_language: string | null, original_title: string | null, overview: string | null, popularity: number | null, poster_path: string, release_date: string | null, title: string | null, video: boolean | null, vote_average: number | null, vote_count: number | null) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.genre_ids = genre_ids;
    this.id = id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }

  getFullBackdropPath(): string | null {
    return this.backdrop_path ? `${MovieApi.IMAGE_BASE_URL}${this.backdrop_path}` : null;
  }

  getFullPosterPath(): string | null {
    return this.poster_path ? `${MovieApi.IMAGE_BASE_URL}${this.poster_path}` : null;
  }
}
