import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MovieApiService} from "../../service/movie-api.service";
import {debounceTime, distinctUntilChanged, filter} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchResult:any;
  searchForm=new FormGroup({
    'movieName':new FormControl()
  });
  constructor(private service :MovieApiService) {
  }
  ngOnInit() {
    this.searchForm.get('movieName')?.valueChanges.pipe(
      debounceTime(400), // Wait for 400ms pause in events
      filter(text => text.length > 2), // Only proceed if the text length is greater than 2
      distinctUntilChanged() // Only proceed if the new value is different from the last
    ).subscribe(value => {
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

