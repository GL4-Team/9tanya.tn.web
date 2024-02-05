import {Component, Input} from '@angular/core';
import {MoviesService} from "../../modules/home/service/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/Movie/movie";
import {MovieDetailResponse} from "../../models/Movie-Detail/movie-detail-response";
import {DetailsService} from "../../modules/details/services/details.service";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  constructor(private service:DetailsService, private activatedRoute:ActivatedRoute) {
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

  onImageError(event: any) {
    event.target.src = 'src/assets/images/placeholder.png';
  }

}
