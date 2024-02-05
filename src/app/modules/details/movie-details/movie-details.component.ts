import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../home/service/movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieDetailResponse} from "../../../models/Movie-Detail/movie-detail-response";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {Cast} from "../../../models/Cast/cast";
import {Movie} from "../../../models/Movie/movie";
import {tap} from "rxjs";
import {DetailsService} from "../services/details.service";



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  autoplay = '?rel=0;&autoplay=1&mute=0';


  constructor(private service:DetailsService,
              private activatedRoute:ActivatedRoute,
              private sanitizer: DomSanitizer,
              private dialog: MatDialog
  ) {
  }


  movie: MovieDetailResponse | null = null;
  video!:string;
  similarMovies: Movie[] | null = null;
  showModal: boolean = false;
  cast: Cast[]| null = null;

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.movie = data['movieData'];
      this.cast = data['cast']?.cast || [];
      this.similarMovies = data['similarMovies']?.results || [];

    });
  }

  /*openDialogMovie(video: VideoDto): void {
    const videoUrl = MovieApi.BASE_URL + video.key + this.autoplay;
    const sanitizedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

    this.dialog.open(AppMovieDialogComponent, {
      height: '600px',
      width: '900px',
      data: { videoUrl: sanitizedUrl }
    });
  }*/

  openDialogMovie(): void {
    if (!this.video) {
      console.log("No video trailer available for this movie.");
      return;
    }
    console.log("openDialog",this.video)
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }



  getVideo(id: any) {
    this.service.getMovieVideo(id).pipe(
      tap(result => console.log(result, 'getmovieVideo#'))
    ).subscribe({
      next: (result) => {
        result.results.forEach((element: any) => {
          if (element.type == "Trailer") {
            this.video = element.key;
          }
        });
      },
      error: (error) => {
        console.error('Error fetching movie video:', error);
      }
    });
  }


}
