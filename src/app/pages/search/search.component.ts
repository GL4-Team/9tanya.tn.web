import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MovieApiService} from "../../service/movie-api.service";
import {debounceTime, distinctUntilChanged, filter} from "rxjs";
import {Movie} from "../../models/Movie/movie";
import {MovieApi} from "../../models/movie.api";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchResult:Movie[] | null = null;

  searchForm=new FormGroup({
    'movieName':new FormControl()
  });

  image_base_url = MovieApi.IMAGE_BASE_URL;

  constructor(private service :MovieApiService) {}

  ngOnInit() {
    this.searchForm.get('movieName')?.valueChanges.pipe(
      debounceTime(600),
      filter((text: string) => text.length >=1),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.performSearch(value);
    });
  }

  performSearch(searchValue: string) {
    this.service.getSearchMovie({movieName: searchValue}).subscribe((result) => {
      console.log(result, 'searchmovie#');
      this.searchResult = result.results;
    });
  }

  submitForm(){
    console.log(this.searchForm.value,'searchform#');
  }

}

