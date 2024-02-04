import {Component, OnInit} from '@angular/core';
import{MovieApiService} from "../../service/movie-api.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:MovieApiService) {}
  bannerResult:any=[]
  trendingMovieResult:any=[]
  upcomingMovieResult:any=[]
  nowPlayingMovieResult:any=[]


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.upcomingData();
    this.nowPlayingData();


  }


  trendingData(){
    this.service.tredingMovieApiData().pipe(
      tap(result => console.log(result, 'trendingresult#'))
    ).subscribe({
      next: (result) => {
        this.trendingMovieResult = result.results;
      },
      error: (error) => {
        console.error('Error fetching trending movies:', error);
      }
    });
  }

  upcomingData(){
    this.service.upcomingMovieApiData().pipe(
      tap(result => console.log(result, 'upcomingresult#'))
    ).subscribe({
      next: (result) => {
        this.upcomingMovieResult = result.results;
      },
      error: (error) => {
        console.error('Error fetching upcoming movies:', error);
      }
    });
  }

  nowPlayingData(){
    this.service.nowPlayingMovieApiData().pipe(
      tap(result => console.log(result, 'nowplayingresult#'))
    ).subscribe({
      next: (result) => {
        this.nowPlayingMovieResult = result.results;
      },
      error: (error) => {
        console.error('Error fetching now playing movies:', error);
      }
    });
  }



}
