import {Component, Input} from '@angular/core';
import {MovieApiService} from "../../service/movie-api.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/Movie/movie";
import {MovieDetailResponse} from "../../models/Movie-Detail/movie-detail-response";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  constructor(private service:MovieApiService, private activatedRoute:ActivatedRoute) {
  }
  movie: MovieDetailResponse | undefined;
  @Input() imageUrl!: string;
  @Input() movieId!: number;

  ngOnInit() {
    let getParamId=this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie(this.movieId);

  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails#')
      this.movie= result;
    })
  }
}
