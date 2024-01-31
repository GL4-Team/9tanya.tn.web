import {Component, OnInit} from '@angular/core';
import{MovieApiService} from "../../service/movie-api.service";

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
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results;
    });
  }

  trendingData(){
    this.service.tredingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult=result.results;
    })
  }

  upcomingData(){
    this.service.upcomingMovieApiData().subscribe((result)=>{
      console.log(result,'upcomingresult#');
      this.upcomingMovieResult=result.results;
    })
  }

  nowPlayingData(){
    this.service.nowPlayingMovieApiData().subscribe((result)=>{
      console.log(result,'nowplayingresult#');
      this.nowPlayingMovieResult=result.results;
    })
  }



}
