import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from "rxjs/operators";
import { Movie } from "../../../models/Movie/movie";
import { MovieApi } from "../../../models/movie.api";
import { MoviesService } from "../../home/service/movies.service";
import {SearchService} from "../service/serach.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchResult: Movie[] | null = null;
  searchForm = new FormGroup({
    'movieName': new FormControl()
  });
  image_base_url = MovieApi.IMAGE_BASE_URL;
  private searchTerms = new Subject<string>();
  private subscription: Subscription | undefined;

  constructor(private service: SearchService) { }

  ngOnInit() {
    this.subscription = this.searchForm.get('movieName')?.valueChanges.pipe(
      debounceTime(600),
      filter((text: string) => text.length >= 1),
      distinctUntilChanged(),
      switchMap((searchValue: string) => {
        this.searchResult = null; // Clear previous results
        return this.service.getSearchMovie({ movieName: searchValue }).pipe(
          tap((result: any) => console.log(result, 'searchmovie#'))
        );
      })
    ).subscribe((result: any) => {
      this.searchResult = result.results;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
  }
}
