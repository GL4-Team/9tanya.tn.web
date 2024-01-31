import {Movie} from "./movie";

export class MovieResponse {
  constructor(page: number | null, results: Movie[] | null, total_pages: number | null, total_results: number | null) {
    this.page = page;
    this.results = results;
    this.total_pages = total_pages;
    this.total_results = total_results;
  }

  page: number | null = null;
  results: Movie[] | null = null;
  total_pages: number | null = null;
  total_results: number | null = null;





}
