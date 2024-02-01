import {MovieApi} from "../movie.api";

export class MovieDetailResponse {
  adult: boolean = false;
  backdrop_path: string = '';
  belongs_to_collection: any | null = null;
  budget: number = 0;
  genres: Genre[] = [];
  homepage: string = '';
  id: number = 0;
  imdb_id: string = '';
  original_language: string = '';
  original_title: string = '';
  overview: string = '';
  popularity: number = 0;
  poster_path: string = '';
  production_companies: ProductionCompany[] = [];
  production_countries: ProductionCountry[] = [];
  release_date: string = '';
  revenue: number = 0;
  runtime: number = 0;
  spoken_languages: SpokenLanguage[] = [];
  status: string = '';
  tagline: string = '';
  title: string = '';
  video: boolean = false;
  vote_average: number = 0;
  vote_count: number = 0;


  constructor(
    adult: boolean = false,
    backdrop_path: string = '',
    belongs_to_collection: any | null = null,
    budget: number = 0,
    genres: Genre[] = [],
    homepage: string = '',
    id: number = 0,
    imdb_id: string = '',
    original_language: string = '',
    original_title: string = '',
    overview: string = '',
    popularity: number = 0,
    poster_path: string = '',
    production_companies: ProductionCompany[] = [],
    production_countries: ProductionCountry[] = [],
    release_date: string = '',
    revenue: number = 0,
    runtime: number = 0,
    spoken_languages: SpokenLanguage[] = [],
    status: string = '',
    tagline: string = '',
    title: string = '',
    video: boolean = false,
    vote_average: number = 0,
    vote_count: number = 0
  ) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.belongs_to_collection = belongs_to_collection;
    this.budget = budget;
    this.genres = genres;
    this.homepage = homepage;
    this.id = id;
    this.imdb_id = imdb_id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.production_companies = production_companies;
    this.production_countries = production_countries;
    this.release_date = release_date;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spoken_languages = spoken_languages;
    this.status = status;
    this.tagline = tagline;
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

export class ProductionCompany {
  id: number = 0;
  logo_path: string = '';
  name: string = '';
  origin_country: string = '';
}

export class ProductionCountry {
  iso_3166_1: string = '';
  name: string = '';
}

export class SpokenLanguage {
  english_name: string = '';
  iso_639_1: string = '';
  name: string = '';
}

export class Genre {
  id: number = 0;
  name: string = '';
}
