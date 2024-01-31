import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MovieApiService} from "../../service/movie-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private service :MovieApiService) {
  }
  ngOnInit() {
  }
  searchResult:any;
  searchForm=new FormGroup({
    'movieName':new FormControl(null)
  });
  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie#');
      this.searchResult=result.results;
    });
  }

}
