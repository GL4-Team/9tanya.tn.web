import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  constructor(private service:MovieApiServiceService, private activatedRoute:ActivatedRoute) {
  }
  getMovieDetailResult:any;
  getMovieVideoResult:any
  getMovieCastResult:any
  ngOnInit() {
    let getParamId=this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails#')
      this.getMovieDetailResult=result;
    })
  }
  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getmovieVideo#')
      result.results.forEach((element:any)=>{
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key;
        }
      })
    })
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult=result.cast;
    })
  }

}
